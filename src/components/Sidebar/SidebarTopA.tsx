import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import { SidebarHideSlim } from './SidebarHideSlim';
import { SidebarSection } from './SidebarSection';
import { SidebarShowSlim } from './SidebarShowSlim';
import { AvatarImage } from '../Avatar/AvatarImage';
import { AvatarAddonIcon } from '../Avatar/AvatarAddonIcon';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown
} from 'reactstrap';

const avatarImg = "../../assets/images/logos/logo-primary.svg";

const SidebarTopA = () => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <SidebarHideSlim>
            <SidebarSection className="pt-0">
                <Link to="/" className="d-block">
                    <SidebarHideSlim>
                        <AvatarImage
                            size="lg"
                            src={ avatarImg }
                            addOns={[
                                <AvatarAddonIcon 
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                    addOnId="avatar--icon"
                                />,
                                <AvatarAddonIcon 
                                    className="fa fa-circle"
                                    color="success"
                                    key="avatar-icon-fg"
                                    addOnId="avatar--icon"
                                />
                            ]}
                        />
                    </SidebarHideSlim>
                </Link>
                
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
                        { faker.name.firstName() } { faker.name.lastName() }
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
                    <DropdownItem header>
                        { faker.name.firstName() } { faker.name.lastName() }
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/apps/profile-details">
                        My Profile
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/settings-edit">
                        Settings
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/billing-edit">
                        Billings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/pages/login">
                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                        Sign Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <div className="small sidebar__link--muted">
                    { faker.name.jobTitle() }
                </div>
            </SidebarSection>
        </SidebarHideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <SidebarShowSlim>
            <SidebarSection>
                <AvatarImage
                    size="sm"
                    src={ avatarImg }
                    addOns={[
                        <AvatarAddonIcon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                            addOnId="avatar--icon"
                        />,
                        <AvatarAddonIcon 
                            className="fa fa-circle"
                            color="success"
                            key="avatar-icon-fg"
                            addOnId="avatar--icon"
                        />
                    ]}
                />
            </SidebarSection>
        </SidebarShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)

export { SidebarTopA };
