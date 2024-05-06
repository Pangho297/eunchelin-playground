import { RangePicker } from "@/components/Date";
import FormFieldWrapper from "@/components/FormFieldWrapper";
import Input from "@/components/Input";
import Select from "@/components/Select";
import useOnChange from "@/hooks/useOnChange";
import { Nullable } from "@/types/common";
import {
  Button,
  ButtonBase,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { dummyRow, EXAMPLE_DROPDOWN } from "./SIdebar.data";
import MdiIcon from "@/components/MdiIcon";
import { mdiDelete, mdiStar } from "@mdi/js";
import useModal from "@/hooks/useModal";
import ConfirmModal from "@/components/Modal/Confirm";
import { useSnackbar } from "notistack";

type RequestModel = {
  group: string[];
  keyword: string;
  start: string;
  end: string;
  menu: string[];
};

const defaultReq: RequestModel = {
  group: [],
  keyword: "",
  start: "",
  end: "",
  menu: [],
};

export default function Sidebar() {
  const { req, handleInputChange, handleSelectChange, handleDateChange } =
    useOnChange(defaultReq);

  const { openModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = (id: number, name: string) => {
    openModal(ConfirmModal, {
      message: `${name} 맛집을 삭제하시겠습니까?`,
      submitText: "삭제",
      onSubmit: () => {
        enqueueSnackbar("삭제가 완료 되었습니다.", { variant: "success" });
      },
    });
  };

  return (
    <Stack gap={2} sx={{ height: "100%" }}>
      <Stack gap={1}>
        <FormFieldWrapper title="그룹">
          <Select
            name="group"
            fullWidth
            items={EXAMPLE_DROPDOWN}
            value={req.group}
            onChange={handleSelectChange}
            placeholder="그룹을 선택해 주세요"
          />
        </FormFieldWrapper>
        <FormFieldWrapper title="메뉴">
          <Select
            name="menu"
            fullWidth
            items={EXAMPLE_DROPDOWN}
            value={req.menu}
            onChange={handleSelectChange}
            placeholder="메뉴를 선택해 주세요"
          />
        </FormFieldWrapper>
        <FormFieldWrapper title="방문일">
          <RangePicker
            start={req.start ? dayjs(req.start) : null}
            end={req.end ? dayjs(req.end) : null}
            onChange={handleDateChange}
          />
        </FormFieldWrapper>
        <FormFieldWrapper title="검색어">
          <Input
            name="keyword"
            value={req.keyword}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="검색어를 입력해 주세요"
          />
        </FormFieldWrapper>
        <Button>검색</Button>
      </Stack>
      <Stack gap={1} sx={{ height: "100%", overflowY: "auto" }}>
        {dummyRow.map((item) => (
          <Stack
            key={item.id}
            gap={0.25}
            sx={{
              position: "relative",
              p: 2,
              bgcolor: "primary.50",
              borderRadius: 2,
            }}
          >
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="bodySS" sx={{ color: "grey.400" }}>
              {item.address}
            </Typography>
            <Stack direction="row" gap={1}>
              {item.menu.map((menu, i) => (
                <Chip
                  key={i}
                  label={
                    <Typography variant="bodySS" sx={{ color: "primary.900" }}>
                      #{menu}
                    </Typography>
                  }
                  size="small"
                  sx={{
                    background: "none",
                    "& .MuiChip-label": {
                      p: 0,
                    },
                  }}
                />
              ))}
            </Stack>
            <Stack direction="row" gap={1}>
              <Stack direction="row" alignItems="center" gap={0.4}>
                <MdiIcon path={mdiStar} color="red" size="14px" />
                <Typography variant="bodySS" fontWeight={700}>
                  {item.rate}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography variant="h5">총 결제 비용</Typography>
                <Typography variant="bodySS">
                  {item.price.toLocaleString("ko-kr")}원
                </Typography>
              </Stack>
            </Stack>
            <IconButton
              sx={{ position: "absolute", bottom: 8, right: 8 }}
              onClick={() => handleDelete(item.id, item.name)}
            >
              <MdiIcon path={mdiDelete} />
            </IconButton>
          </Stack>
        ))}
      </Stack>
      <Button color="secondary">맛집 등록하기</Button>
    </Stack>
  );
}
