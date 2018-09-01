import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

export default class Navbar extends Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="title" color="inherit" style={{flex:1}}>
						The Aaron Massey Project
					</Typography>
					<Button color="inherit" href="https://medium.com/@aaronmassey45">Blog</Button>
					<Button color="inherit" href="https://github.com/aaronmassey45">GitHub</Button>
				</Toolbar>
			</AppBar>
		);
	}
}
