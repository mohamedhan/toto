import React from 'react';
import './Posts.css'

import SideBar from '../../components/SideBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostCard from '../Post/components/PostCard'
import Article from '../../components/Article'
import NavBar from '../Home/components/NavBar'
import PostCardUser from  '../../components/PostCardUser'
// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },

// }));




const Posts = () => {
    // const classes = useStyles();
    return (
        <div >
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <NavBar></NavBar>
                </Grid>
                {/* <NavBar /> */}
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={6}>
                        <PostCardUser />
                </Grid>
                <Grid item xs={3}>
                    <Article/>
                    <Article/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Posts;
