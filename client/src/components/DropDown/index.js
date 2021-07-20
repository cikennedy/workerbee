import Select from 'react-dropdown-select';
import React, { Component } from 'react';

const Categories = [
  { label: "Lawn Care", value: "Lawn Care" },
  { label: "Auto Care", value: "Auto Care" },
  { label: "Moving Help", value: "Moving Help" }
];

class DropDown extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Categories} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default DropDown

// export const DropDown = ({ options }) => (
//   <Select
//     multi
//     options={options}
//     onChange={(values) => this.onChange(values)}
//   />
// );

// import React from 'react';
// import { useDownloadMenuStyles } from '@mui-treasury/styles/menu/download';
// import MenuItem from '@material-ui/core/MenuItem';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
// import Menu from '@material-ui/core/Menu';
// import Button from '@material-ui/core/Button';


// // Original design here: https://github.com/siriwatknp/mui-treasury/issues/777

// const DropDown = () => {

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const downloadMenuClasses = useDownloadMenuStyles();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         className={downloadMenuClasses.button}
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <GetAppRoundedIcon className={downloadMenuClasses.downloadIcon}/>
//         <span>Category</span>
//         <ExpandMoreIcon className={anchorEl ? downloadMenuClasses.downIcon : downloadMenuClasses.upIcon}/>
//       </Button>
//       <Menu
//         id="simple-menu"
//         classes={{ paper:downloadMenuClasses.paper }}
//         getContentAnchorEl={null}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left"
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left"
//         }}
//         keepMounted
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Auto Care</MenuItem>
//         <MenuItem onClick={handleClose}>Moving Help</MenuItem>
//         <MenuItem onClick={handleClose}>Lawn Care</MenuItem>
//       </Menu>
//     </div>
//   );
// };


// export default DropDown;


{/* <div>
<label class="">Category</label>
<select id="">
    <option value='Lawn Care'>Lawn Care</option>
    <option value='Auto Care'>Auto Care</option>
    <option value='Moving Help'>Moving Help</option>
</select>
</div> */}

// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// import HouseIcon from '@material-ui/icons/House';
// import DriveEtaIcon from '@material-ui/icons/DriveEta';

// const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

// export default function DropDown() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="customized-menu"
//         aria-haspopup="true"
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//       >
//         Category
//       </Button>
//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <StyledMenuItem>
//           <ListItemIcon>
//             <LocalShippingIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Moving Help" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemIcon>
//             <DriveEtaIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Auto Care" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemIcon>
//             <HouseIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Lawn Care" />
//         </StyledMenuItem>
//       </StyledMenu>
//     </div>
//   );
// }