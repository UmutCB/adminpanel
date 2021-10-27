import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import {Sidebar} from '../App/Sidebar';
import Webcam from 'react-webcam';
class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            
            <div>
                <div style={{paddingLeft:"80%", display:"flex", marginTop:"10px", position:"absolute", zIndex:"1"}}>
                    <p>Başarıyla giriş yapıldı</p>
                    <h2>{user.firstName}</h2>
                   <p>
                        <Link to="/login">Çıkış yap
                        </Link>
                    </p>
                    <Webcam width={"0"} height={"0"}/>
                </div>
                <Sidebar/>
                <div style={{paddingLeft:"50%", alignItems:"center", position:"static", margin:"0 auto"}}>
                <h3>Kayıtlı kullanıcılar</h3>
                {users.loading && <em>Kullanıcılar</em>}
                {users.error && <span className="text-danger">HATA: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em>Siliniyor...</em>
                                    : user.deleteError ? <span className="text-danger"> - HATA: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Kaldır</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                </div>
               
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };