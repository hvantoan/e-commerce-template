import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectProps } from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
      SelectDisplayProps={{
        // @ts-ignore
        'data-screenshot': 'toggle-mode'
      }}
      {...props}
    >
      <MenuItem value='system'>Hệ thống</MenuItem>
      <MenuItem value='light'>Sáng</MenuItem>
      <MenuItem value='dark'>Tối</MenuItem>
    </Select>
  );
}
