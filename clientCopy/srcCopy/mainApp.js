// Modules
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

// Styles
import style from './mainApp.module.css';

// Redux
import { connect } from 'react-redux';
import { getUserInfo, restoreSession } from './Redux/Actions/httpActions';
import ScrollTop from './Components/ScrollTop/scrollTop';
import Modal from './Components/Modals/modal';

// Components

function MainApp(props) {
  const { error, isLoggedIn, restoreSession, redirectToLogin, getUserInfo } =
    props;

  const [modalState, setModalState] = useState({ show: false });
  const [dropModal, setDropModal] = useState(false);

  // console.log('Client logged in: ', isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      // console.log('Restoring session..');
      restoreSession();
    } else if (isLoggedIn) {
      // console.log('Getting user info');
      getUserInfo();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (error) {
      // console.log('Error: ', error)
      setDropModal(true);
    }
  }, [error]);

  useEffect(() => {
    if (redirectToLogin) {
      // location.href = 'http://localhost:5000/login';
      window.location.href = '/login';
    }
  }, [redirectToLogin]);

  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/dashboard', text: 'DashBoard' },
    { path: '/preferences', text: 'Preferences' },
    { path: '/logout', text: 'Logout' },
  ];

  return (
    <div className={`${style.container}`}>
      {/* Add baseName to router */}
      <BrowserRouter basename='/app'>
        <ScrollTop />
        <Modal modalState={modalState} setModalState={setModalState} />
        <TopNav links={navLinks} />
        <DropModal
          text={error ? error.message : ''}
          show={dropModal}
          setDropModal={setDropModal}
        />

        {isLoggedIn ? (
          <Switch></Switch>
        ) : (
          <section
            className={`flex flex-col justify-center align-center ${style.altPage}`}></section>
        )}
      </BrowserRouter>

      {/* Fab Button */}
      <div
        className={`flex justify-center align-center brand-bg light-text ${style.fabBtn}`}
        onClick={() => {
          setModalState({
            show: true,
            type: 'upload',
          });
        }}>
        <FiPlus className={style.fabIcon} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { error, isLoggedIn, redirectToLogin } = state.app;

  return { error, isLoggedIn, redirectToLogin };
}

function mapDispatchToProps(dispatch) {
  return {
    restoreSession: () => dispatch(restoreSession()),
    getUserInfo: () => dispatch(getUserInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
