import {
  FormControl,
  SelectChangeEvent,
  Select as MUISelect,
  SxProps,
  Theme,
  MenuItem,
  styled,
  Button,
  Typography,
  Stack,
  FormHelperText,
} from "@mui/material";
import MdiIcon from "./MdiIcon";
import { mdiCheck } from "@mdi/js";

interface SelectProps {
  value: string[];
  disabled?: boolean;
  name?: string;
  size?: "medium" | "small";
  placeholder?: string;
  items: {
    label: string;
    value: string;
  }[];
  fullWidth?: boolean;
  errorMessage?: string;
  onChange?: (e: SelectChangeEvent<string[]>) => void;
  sx?: SxProps<Theme>;
}

export default function Select({
  items,
  fullWidth,
  errorMessage,
  placeholder,
  sx,
  ...rest
}: SelectProps) {
  const handleSelectAll = (e: any) => {
    e.stopPropagation();
    rest.onChange?.({
      target: {
        value: items.map(({ value }) => value),
        name: rest.name,
      },
    } as any);
  };

  const handleDeselectAll = (e: any) => {
    e.stopPropagation();
    rest.onChange?.({
      target: {
        value: [],
        name: rest.name,
      },
    } as any);
  };

  return (
    <FormControl fullWidth={fullWidth} error={Boolean(errorMessage)} sx={sx}>
      <MUISelect
        multiple
        displayEmpty
        renderValue={(selected) =>
          rest.value.length === 0 && placeholder ? (
            <Typography variant="bodySS" sx={{ color: "grey.200" }}>
              {placeholder}
            </Typography>
          ) : (
            <Typography variant="bodySS">
              {findLabels(items, selected).join(", ")}
            </Typography>
          )
        }
        sx={{
          width: fullWidth ? "auto" : "fit-content",
          backgroundColor: "common.white",
        }}
        {...rest}
      >
        <MenuItem
          disableRipple
          onClick={(e) => e.stopPropagation()}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            cursor: "default",
            ":hover": {
              backgroundColor: "transparent !important",
            },
          }}
        >
          <SelectButton color="secondary" onClick={handleSelectAll}>
            <Typography>전체선택</Typography>
          </SelectButton>
          <SelectButton color="secondary" onClick={handleDeselectAll}>
            <Typography>전체해제</Typography>
          </SelectButton>
        </MenuItem>
        {items.map((item) => (
          <CustomItem key={item.value} value={item.value}>
            <Stack>
              <Typography variant="bodySS">{item.label}</Typography>
              {rest.value.indexOf(item.value) > -1 && (
                <MdiIcon path={mdiCheck} />
              )}
            </Stack>
          </CustomItem>
        ))}
      </MUISelect>
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

const SelectButton = styled(Button)(({ theme }) => ({
  height: 25,
  padding: theme.spacing(1),
  ">.MuiTypography-root": {
    ...theme.typography.caption,
    color: theme.palette.secondary.contrastText,
  },
}));

const CustomItem = styled(MenuItem)(() => ({
  ">.MuiStack-root": {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
}));

function findLabels(arr: { label: string; value: string }[], values: string[]) {
  const labels = [];
  for (const givenValue of values) {
    const foundLabel = arr.find((item) => item.value === givenValue)?.label;

    if (foundLabel) {
      labels.push(foundLabel);
    }
  }
  return labels;
}
