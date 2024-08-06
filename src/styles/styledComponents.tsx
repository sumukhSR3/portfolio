import {
  TooltipProps,
  Tooltip,
  tooltipClasses,
  styled,
  Avatar,
} from "@mui/material"

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#3e5060eb",
    color: "#fff",
    fontSize: "0.75rem",
  },
}))

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "50px",
  height: "50px",
}))

export const BlueSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
}))
