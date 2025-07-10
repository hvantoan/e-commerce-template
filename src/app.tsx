import { Add } from "@mui/icons-material"
import { Button, Card, IconButton } from "@mui/material"
import { Calendar } from "lucide-react"
import ColorModeSelect from "./config/theme/color-mode/color-mode-select"

export const App = () => {
    return <Card>
        <Button color="primary" >
            <Add />
            Thêm mới
        </Button>
        <IconButton color="primary" size="large">
            <Calendar />
        </IconButton>

        <div className="grid grid-cols-12 gap-2">
            <Card className="size-14 !bg-primary col-span-12 md:col-span-6 w-full"></Card>
            <Card className="size-14 !bg-primary col-span-12 md:col-span-6 w-full "></Card>
            <Card className="size-14 !bg-primary col-span-12 md:col-span-6 w-full"></Card>
            <Card className="size-14 !bg-primary col-span-12 md:col-span-6 w-full"></Card>
        </div>

        <ColorModeSelect />
    </Card>
}