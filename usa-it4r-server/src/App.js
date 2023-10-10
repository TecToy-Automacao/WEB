import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import aguia from "./assets/itfast.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: "center",
  },
  imgBox: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "10px",
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none",
  },
}));

function App() {
  const classes = useStyles();
  const [source, setSource] = useState("");
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  const [message, setMessage] = useState("");

  function print() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/printer',
      headers: {'Content-Type': 'application/json'},
      data: {CMD: 'imprimir', PARAM: `${message}<l>`}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  function printPwd() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/printer',
      headers: {'Content-Type': 'application/json'},
      data: {CMD: 'imprimir', PARAM: `<ce><b><da><dl><l>BEM VINDO<l><l></dl></da><inv><eg>S123<l></eg></inv></b><da>Sua posicao na fila: 10<l><l></da>Conheca nossos produtos!<l>http://tectoy.com.br/<l><l>06/10/2023<l></ce><l><l><l><l><l>`}
    };
    
    axios.request(options).then(function (response) {
      const options = {
        method: 'POST',
        url: 'http://127.0.0.1:5000/printer',
        headers: {'Content-Type': 'application/json'},
        data: {CMD: 'acionarGuilhotina', PARAM: ''}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }).catch(function (error) {
      console.error(error);
    });
  }

  function gui() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/printer',
      headers: {'Content-Type': 'application/json'},
      data: {CMD: 'acionarGuilhotina', PARAM: ''}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  function ligaLedVermelho() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/led',
      headers: {'Content-Type': 'application/json'},
      data: {CMD: 'ligarLedStatus', PARAM: 'VERMELHO'}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  function ligaLedVerde() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/led',
      headers: {'Content-Type': 'application/json'},
      data: {CMD: 'ligarLedStatus', PARAM: 'VERDE'}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  function ligaLedAzul() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/led',
      headers: {'Content-Type': 'application/json'},
      data: {CMD: 'ligarLedStatus', PARAM: 'AZUL'}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  function desligaLed() {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:5000/led',
      headers: {'Content-Type': 'application/json'},
      data: {CMD: 'desligarLedStatus', PARAM: ''}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <img
            src={aguia}
            alt="Aguia"
            style={{ width: "50%", height: "50%" }}
          />
        </Grid>
       
      </Grid>
      <Grid container style={{ marginTop: 100}} spacing={1}>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item>
            <TextField
              id="txtEntrada"
              type=""
              name= "txtEntrada"
              label= "Texto impressão"
              variant= "outlined"
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={print}>
              Imprimir
            </Button>
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={printPwd}>
              Imprimir cupom exemplo
            </Button>
        </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={gui}>
              Acionar Guilhotina
            </Button>
        </Grid>

        <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={ligaLedAzul}>
              Ligar Led Azul
            </Button>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={ligaLedVerde}>
            Ligar Led Verde
            </Button>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={ligaLedVermelho}>
            Ligar Led Vermelho
            </Button>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={desligaLed}>
              Desligar Led
            </Button>
        </Grid>
        </Grid>
        
        <Grid item xs={12} style={{ marginTop: 30 }}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="primary" component="span">
              Abrir Câmera
            </Button>
          </label>
          <h5>Imagem Camera</h5>
          {source && (
            <Box
              style={{
                margin: "auto",
              }}
              border={1}
              className={classes.imgBox}
            >
              <img src={source} alt={"snap"} className={classes.img}></img>
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
export default App;