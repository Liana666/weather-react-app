import { useSelector, useDispatch } from 'react-redux';
import girl from './img/girl.png'
import plus from "./icons/plus.svg"
import { changeBooleanAc } from './redux/reducers/PopUpReducer';
import { AppStateType } from './redux/store';
import './App.sass';
import MainContainer from './components/Main/MainContainer';
import NewCity from './components/NewCity/NewCity';
import CityDetails from './components/CityDetails/CityDetails';

const App = () => {
  let isTrue = useSelector((state: AppStateType) => state.PopUp.isTrue)
  const isTrueClass = useSelector((state: AppStateType) => state.CityDetails.isTrue)
  const dispatch = useDispatch();
  const openPopup = () => {
    dispatch(changeBooleanAc(true))
  }

  return (
    <div className="App">
      <img className="App__img" src={girl} alt="" />
      <header className="App__header">
        <div className="App__header__logo">WeatherToday</div>
      </header>
      <MainContainer />
      <section className="button_new">
        <div
          onClick={openPopup}
          className="plus">
          <img src={plus} alt="" />
        </div>
        <span>Добавить</span>
      </section>
      {isTrue ? <NewCity /> : null}
      {isTrueClass ? <CityDetails /> : null}
    </div>
  );
}

export default App;
