import React                                    from 'react'
import {Badge,Nav, NavItem, NavLink}            from 'reactstrap'
import {BiBookmark,BiGitPullRequest}            from 'react-icons/bi'
import {AiOutlineHeart,AiOutlineSecurityScan}   from 'react-icons/ai'
import {BsEye,BsStar,BsCode,BsGraphUp}          from 'react-icons/bs'
import {VscRepoForked,VscIssues}                from 'react-icons/vsc'
import '../styles/issues_nav.css'
const Issues_Nav = () => {
  return (
    <div className='issues_nav_container'>
        <div className='issues_nav_repo-wrapper'>
            <div className='issues_nav_repo-title'>
                <div className='issues_nav_repo-title-wrapper'>
                    <div className='issues_nav_title'>
                        <div>
                            <BiBookmark />
                        </div>
                        <div>
                            <p style={{color : 'blue',marginLeft : '2px', marginTop : '1px'}}>
                                Pallets/click
                            </p>
                        </div>
                    </div>
                    <div>
                        <Badge color='light' className='issues_badge' pill>Public</Badge>
                    </div>
                </div>
            </div>
            <div className='issues_nav_repo-badges'>
                <div className='issues_nav_repo_badges-list'>
                        <Badge pill color='light' className='issues_badge'>
                            <AiOutlineHeart />Sponsor
                        </Badge>
                </div>
                <div className='issues_nav_repo_badges-list'>
                    <Badge pill color='light' className='issues_badge'>
                        <BsEye />Watch
                    </Badge>
                </div>
                <div className='issues_nav_repo_badges-list'>
                    <Badge pill color='light' className='issues_badge'>
                        <VscRepoForked />Fork
                    </Badge>
                </div>
                <div className='issues_nav_repo_badges-list'>
                    <Badge pill color='light' className='issues_badge'>
                        <BsStar />Star
                    </Badge>
                </div>
            </div>
        </div>
        <div className='issues_nav_tabs_container'>
            <Nav tabs>
                <NavItem>
                    <NavLink className='inactive'>
                        <BsCode/>Code
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='inactive'>
                       <BiGitPullRequest/> Pull requests
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='inactive'>
                    <VscIssues />Issues
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='inactive'>
                        <AiOutlineSecurityScan />Security
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='inactive'>
                        <BsGraphUp />Insights
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
  )
}

export default Issues_Nav
