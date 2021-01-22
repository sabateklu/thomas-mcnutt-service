import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const StyledImg = styled(Avatar)({
  height: '100px',
  width: '100px',
});

const StyledDoc = styled(Grid)({
  padding: '150px',
});

export {
  StyledImg, StyledDoc,
};
