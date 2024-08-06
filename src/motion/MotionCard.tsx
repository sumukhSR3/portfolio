import Card, { CardProps } from "@mui/material/Card"
import { m } from "framer-motion"
import React from "react"

const Component = React.forwardRef((props: CardProps, ref: any) => (
  <Card ref={ref} {...props} />
))

const MotionCard = m(Component)

export default MotionCard
