import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  NTitle,
  NSearch,
  NCardDrop,
  Background,
  NModalAddAddress,
  Loading,
} from '~/components';
import { useApiEffect } from '~/hooks';
import { getPoints, postPoint } from '~/services/points';

import { Container } from './styles';

const Disembarkation = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [points, setPoints] = useState([]);
  const [modalAddress, setModalAddress] = useState(false);

  const [search, setSearch] = useState('');
  const [pointsList, setPointsList] = useState(points);

  const [newPoints, setNewPoints] = useState([]);
  // const { state } = useLocation();
  // const { embarkation } = state; // Read values passed on state

  useApiEffect(getPoints, response => setPoints(response.data));

  function apiPoints(street) {
    const request = async () => {
      try {
        const api = await axios(
          `https://nominatim.openstreetmap.org/search?addressdetails=1&country=Brazil&state=Paraíba&city=João+Pessoa&street=${street.replace(
            ' ',
            '+'
          )}&format=json`
        );

        const listPoints = api.data.map((point, i) => {
          const list = {
            id: i + 5,
            name: point.display_name,
            adress: '',
          };

          return list;
        });

        setNewPoints(listPoints);
      } catch (error) {
        console.log(error);
      }
    };

    request();
    console.log(newPoints);
  }

  useEffect(() => {
    const regex = new RegExp(search, 'gi');
    setPointsList(points);
    if (search) {
      setLoading(true);
      const prePoints = points.filter(point => point.name.match(regex));

      apiPoints(search);

      if (prePoints.length < 1) setPointsList(newPoints);
      else setPointsList(prePoints);
      setLoading(false);
    } else {
      setPointsList(points);
    }
  }, [points, search]);

  function addPoint(data) {
    postPoint(data.streets, data.numbers, data.references);
    setModalAddress(false);
  }

  const cardsDrops = pointsList.map(point => (
    <NCardDrop
      key={point.id}
      name={point.name}
      adress={point.adress}
      className="card"
      onClick={() => navigate('/horarios')}
    />
  ));

  return (
    <Container>
      {loading && <Loading />}
      <Background />
      <div className="div_top">
        <NTitle label="Desembarque" color="white" className="title" />
      </div>

      <NSearch
        className="nsearch"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Digite o nome da rua:"
      />

      {cardsDrops}

      {cardsDrops.length < 1 && (
        <NCardDrop
          name="Endereço personalizado"
          adress="Clique para adicionar um endereço personalizado"
          className="card"
          onClick={() => {
            setModalAddress(true);
          }}
        />
      )}

      <NModalAddAddress
        visible={modalAddress}
        onClose={() => setModalAddress(false)}
        label="Adicione um desembarque personalizado"
        save={data => {
          addPoint(data);
        }}
      />
    </Container>
  );
};

export default Disembarkation;
