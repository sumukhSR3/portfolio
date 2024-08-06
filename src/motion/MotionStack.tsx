import Stack, { StackProps } from "@mui/material/Stack"
import { m } from "framer-motion"
import React from "react"

const Component = React.forwardRef((props: StackProps, ref: any) => (
  <Stack ref={ref} {...props} />
))

const MotionStack = m(Component)

export default MotionStack
