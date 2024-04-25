/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const util = require('util');
const path = require('path');

const readdir = util.promisify(fs.readdir);

const assetDir = process.argv.slice(2)[0];

// 이미지를 동적으로 불러오기 위해 public에서 관리.
const _savePath = '/src/assets/iconInfo.json';

async function getFileList(pathname, prefix) {
    const fileNames = await readdir(prefix ? `${pathname}/${prefix.join('/')}` : pathname);

    return Promise.all(
        fileNames.map((name) => {
            if (name.indexOf('.') === -1) {
                // 폴더인 경우
                return getFileList(pathname, [...prefix, name]);
            }
            if (name.indexOf('.') !== 0) {
                // 파일인 경우
                let CONSTANTS_NAME = name.toUpperCase().split('.')[0];
                let filePath = name;

                if (prefix.length > 0) {
                    CONSTANTS_NAME = `${prefix.join('_').toUpperCase()}_${CONSTANTS_NAME}`.replace(
                        /[\{\}\[\]\/?,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,
                        '_',
                    );
                    filePath = `${prefix.join('/')}/${name}`;
                }
                return new Promise((resolve) => {
                    resolve({ name: CONSTANTS_NAME, filePath });
                });
            }
            return new Promise((resolve) => {
                resolve(null);
            });
        }),
    );
}

async function updateFileInfoJson(basePath) {
    if (basePath) {
        const fileInfoObj = {
            assetsBasePath: basePath,
            files: {},
        };
        const cwd = process.cwd();
        const pathName = path.resolve(cwd, basePath);

        try {
            const fileList = await getFileList(pathName, []);

            fileList
                .flat(Infinity)
                .filter(Boolean)
                // eslint-disable-next-line array-callback-return
                .map(({ name, filePath }) => {
                    fileInfoObj.files[name] = filePath;
                });
            const savePath = `${cwd}${_savePath}`;

            fs.writeFileSync(savePath, JSON.stringify(fileInfoObj));
            console.log('--- AssetManager -> Update assets ---\n', fileInfoObj);
        } catch (e) {
            console.error(e);
        }
    }
}

async function init(dir) {
    try {
        await updateFileInfoJson(dir);
        fs.watch(
            assetDir,
            {
                recursive: true,
            },
            (eventType, fileName) => {
                console.log('--- AssetManager -> Detect Asset File Changes ---');
                console.info('fileName:', fileName);
                updateFileInfoJson(dir);
            },
        );
    } catch (e) {
        console.error(e);
    }
}

init(assetDir).then(() => {
    process.exit();
});
