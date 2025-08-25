import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import {
    fetchUserPriviledge,
    fetchUsers,
    UserPermission,
    UsersLookup,
} from './utils/users';
import { useCookies } from 'react-cookie';
import NewUserModal from './components/NewUserModal';
import { User } from './utils/users';

interface CustomEvent extends Event {
    id: number;
    allDayStart: boolean;
    allDayEnd: boolean;
}

export default function BasuScreen1() {
    const [events, setEvents] = useState<CustomEvent[]>([]);
    const [users, setUsers] = useState({} as UsersLookup);
    const [loggedInUser, setLoggedInUser] = useState<UserPermission>( {
        id: 0, firstName:'', lastName:'', emailAddress:'', superAdmin:false, teamOwnerList:[]
    });
    const [cookies] = useCookies(['current_user_id']);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    useEffect(() => {
        (async () => {
            const loggedInUser = await fetchUserPriviledge();
            setLoggedInUser(loggedInUser);
        })();
    }, []);


    // ADMIN functions
    function notInstalledYet(message?: string) {
        alert(`Not done yet! ${message}`);
    }
    // Admin (user) functions:
    const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
    const [newUserModalClosed, setNewUserModalClosed] = useState(false);

    function listAllUsers() {
        setIsNewUserModalOpen(true);
        notInstalledYet(`listAllUsers`);
    }

    function showSingleUser(id: number) {
        notInstalledYet(`showSingleUser(${id})`);
    }

    function createUser() {
        notInstalledYet(`createUser`);
    } 

    function deleteUser(id: number) {
        notInstalledYet(`notInstalledYet(${id})`);
    }

    // Admin (team) functions:
    function showAllTeams() {
        notInstalledYet(`showAllTeams`);
    }

    function showOwnTeams(teams:number[]) {
        notInstalledYet(`showTeams( ${teams} )`);
    }

    function createTeam() {
        notInstalledYet(`createTeam`);
    }

    // Admin button pressed
    function buttonClicked(name:string, isSuperAdmin:boolean, teamOwnerList:number[]) {
        switch (name) {
            case 'ListAllUsers' :
                listAllUsers();
                break;
            case 'CreateUser'   :
                createUser();
                break;
            case 'CreateTeam'   :
                createTeam();
                break;
            case 'ShowOwnTeams' :
                showOwnTeams(teamOwnerList);
                break;
            case 'ShowTeams'    :
                showAllTeams();
                break;
            default             :
                alert(`no action defined for ${name} button`);
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar
                superAdmin={loggedInUser.superAdmin}
                teamAdmin={loggedInUser.teamOwnerList.length > 0}
                onAddEventClick={() => setIsModalOpen(true)}
                users={users}
            />


        </div>
    );
}
