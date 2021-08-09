import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
//import './Home.css';
//import styles from "./Home.module.css";

const Home: React.FC = () => {

  const [ Num, setNum ] = useState(0);
  const [ val1, setVal1 ] = useState(0);
  const [ val2, setVal2 ] = useState(0);
  const [ option, setOption ] = useState(0);

  const sum = () => {
    setVal2(val1);
    setOption(1);
  }

  const subtr = () => {
    setVal2(val1);
    setOption(2);
  }

  const multi = () => {
    setVal2(val1);
    setOption(3);
  }

  const div = () => {
    setVal2(val1);
    setOption(4);
  }

  const c = () => {
    setNum(0);
    setVal1(0);
    setVal2(0);
  }

  const outcome = () => {
    switch(option){
      case 1:
        setNum(val1 + val2);
        setNum(Num);
        break;
      case 2:
        setNum(val2 - val1);
        break;
      case 3:
        setNum(val1 * val2);
        break;
      case 4:
        if (val2 === 0 ){
          setNum(0.00000000000000000)
        }
        setNum(val2 / val1);
        break;
      default:
        setNum(0);
        break;
    }
    console.log(Num);
    setVal1(val1);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora con React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonText >{Num}</IonText>
        <br />
        <IonButton onClick={()=>{setNum(1);setVal1(1)}} > 1 </IonButton>
        <IonButton onClick={()=>{setNum(2);setVal1(2)}} > 2 </IonButton>
        <IonButton onClick={()=>{setNum(3);setVal1(3)}} > 3 </IonButton>
        <IonButton onClick={()=>{c()}} > c </IonButton> 
        <br />
        <IonButton onClick={()=>{setNum(4);setVal1(4)}} > 4 </IonButton>
        <IonButton onClick={()=>{setNum(5);setVal1(5)}} > 5 </IonButton>
        <IonButton onClick={()=>{setNum(6);setVal1(6)}} > 6 </IonButton>
        <IonButton onClick={()=>{sum()}} > + </IonButton>
        <br />
        <IonButton onClick={()=>{setNum(7);setVal1(7)}} > 7 </IonButton>
        <IonButton onClick={()=>{setNum(8);setVal1(8)}} > 8 </IonButton>
        <IonButton onClick={()=>{setNum(9);setVal1(9)}} > 9 </IonButton>
        <IonButton onClick={()=>{subtr()}} > - </IonButton>
        <br />
        <IonButton onClick={()=>{setNum(0);setVal1(0)}} > 0 </IonButton>
        <IonButton onClick={()=>{multi()}} > x </IonButton>
        <IonButton onClick={()=>{div()}} > / </IonButton>
        <IonButton onClick={()=>{outcome()}} > = </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

// deber apps
