import getConfig from 'next/config';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

const { publicRuntimeConfig } = getConfig();
const { APP_NAME } = publicRuntimeConfig;

const CustomAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Image alt="グルメンドロゴ" src="/logo3.png" width={300} height={100} />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
