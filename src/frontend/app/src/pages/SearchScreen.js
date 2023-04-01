import React from 'react';
import {Link, useNavigate, useLocation } from 'react-router-dom'

export default function SearchScreen() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const category = sp.get('category') || 'all';


    return (
        <div>
            SearchScreen
        </div>
    )
}