// 이 파일에선 MUI에서 제공해주는 컴포넌트의 기본 옵션을 지정해 줄 수 있다
// 기본 예시로 Button 컴포넌트의 기본값을 설정해둔 파일에서 defaultProps를 참조한다
// MUI 컴포넌트의 기본 변수 값, 기본 스타일등을 수정하는것이 override라고 보면 된다

import { Theme } from "@mui/material";
import Button from "./Button";
import TextField from "./TextField";
import Select from "./Select";
import FormHelperText from "./FormHelperText";
import Checkbox from "./Checkbox";
import Switch from "./Switch";
import Radio from "./Radio";
import DatePicker from "./DatePicker";
import Typography from "./Typhograpy";

export default function componentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    TextField(theme),
    Select(theme),
    FormHelperText(theme),
    Checkbox(theme),
    Radio(theme),
    Switch(theme),
    DatePicker(theme),
    Typography(theme)
  );
}
