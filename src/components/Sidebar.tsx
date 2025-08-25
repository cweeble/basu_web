import styled from 'styled-components';
import { UsersLookup } from '../utils/users';

type SidebarProps = {
    superAdmin:boolean;
    teamAdmin:boolean;
    onAddEventClick: () => void;
    users: UsersLookup;
};

const SidebarContainer = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`;

const SidebarTitle = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
`;

const SegmentsImage = styled.img`
    opacity: 0.5;
    height: 60%;
    margin-top: auto;
`;

type ButtonData = {
    name: string;
    text: string;
    subMenu: 'users' | 'teams';
    superAd: boolean;
    teamAd: boolean;
};

export default function Sidebar(
    {
        superAdmin,
        teamAdmin,
        onAddEventClick,
        users,
    }: SidebarProps
) {
    const buttonData:ButtonData[] = [
        {
            name: 'ListAllUsers',
            text: 'Show All Users',
            subMenu: 'users',
            superAd: true,
            teamAd: true,
        },
        {
            name: 'CreateUser',
            text: 'Create New User',
            subMenu: 'users',
            superAd: true,
            teamAd: true,
        },
        {
            name: 'CreateTeam',
            text: 'Create New Team',
            subMenu: 'teams',
            superAd: true,
            teamAd: false,
        },
        {
            name: 'ShowOwnTeams',
            text: 'Show My Teams',
            subMenu: 'teams',
            superAd: false,
            teamAd: true,
        },
        {
            name: 'ShowTeams',
            text: 'Show All Teams',
            subMenu: 'teams',
            superAd: true,
            teamAd: false,
        },
    ];

    function buttonPressed(name: string) {
        const bd: ButtonData | undefined = buttonData.find(
            (x) => x.name === name,
        );
        if (bd == undefined) {
            alert('clicked but not found');
            return;
        }
        // buttonClicked(bd.name);
    }

    let buttonKey:number = 0;

    return (
        <SidebarContainer>
            <SidebarTitle>Actions</SidebarTitle>
                <div>
                    <button
                        className="button-primary"
                        style={{ width: '100%' }}
                        onClick={onAddEventClick}
                    >
                        Add event
                    </button>
                </div>
{/*}                { (superAdmin ) && 
                    <div>
                        <SidebarTitle>* User Menu</SidebarTitle>
                        { buttonData.filter((x) => x.subMenu === 'users').map( item => {
                            const display=((superAdmin && item.superAd) || (teamAdmin && item.teamAd) ) ? 'flex':'none';
                            return (
                                <AdminButtonProps
                                    display={ display } 
                                    type='button'
                                    label={item.text}
                                    onClick={ () => buttonPressed(item.name) }
                                    key= { buttonKey++ }
                                />
                            );
                        
                        }) }        
                    </div>
                }
*/}
{/*                 { (superAdmin ) &&
                    <div>
                        <SidebarTitle>* Teams Menu</SidebarTitle>
                        { buttonData.filter((x) => x.subMenu === 'teams').map( item => {
                            const display=((superAdmin && item.superAd) || (teamAdmin && item.teamAd) ) ? 'flex':'none';
                            return (
                                <AdminButton
                                    display={ display } 
                                    type='button'
                                    label={item.text}
                                    onClick={ () => buttonPressed(item.name) }
                                    key= { buttonKey++ }
                                />
                            );
                        
                        }) }        
                    </div>
                }
 */}
                <h4 style={{ marginBottom: '0.8rem' }}>Select Team</h4>
    

        </SidebarContainer>
    );
}
