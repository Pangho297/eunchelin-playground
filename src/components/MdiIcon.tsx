import { Nullable } from "@/types/common";
import { Icon } from "@mdi/react";

type MdiIconProps = {
  path: string;
  size?: Nullable<string | number>;
  color?: string;
};

export default function MdiIcon({ path, size = 0.8, color }: MdiIconProps) {
  return <Icon {...{ path, size, color }} />;
}
