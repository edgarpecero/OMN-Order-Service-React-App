import { IconButton } from '@mui/material';
import Icon from '@mui/icons-material/Refresh';

const RefreshIcon = ({ onRefresh }: { onRefresh: () => void }) => (
  <IconButton size='large' onClick={onRefresh}>
    <Icon />
  </IconButton>
);

export default RefreshIcon;
