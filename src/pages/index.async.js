/**
 * Created by minsu.han on 2017. 7. 1..
 */
import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const About = asyncRoute(() => import('./About'));
export const Post = asyncRoute(() => import('./Post'));
export const Posts = asyncRoute(() => import('./Posts'));
export const Users = asyncRoute(() => import('./Users'));