import { useState } from 'react';

import { useApiEffect } from '~/hooks';
import { getEmbarkations } from '~/services/driver/embarkations';

const useDisembarkations = () => {
  const [disembarkations, setDisembarkations] = useState({
    places: [],
  });

  const clone = state => ({
    ...state,
    places: state.places.map(item => ({
      ...item,
      people: [...item.people],
    })),
  });

  useApiEffect(getEmbarkations, response => {
    const { data } = response;

    for (let i = 0; i < data.places.length; i += 1) {
      for (let j = 0; j < data.places[i].people.length; j += 1) {
        data.places[i].people[j].onConfirm = () => {
          setDisembarkations(previous => {
            const cloned = clone(previous);

            cloned.places[i].people[j].selected = true;

            return cloned;
          });
        };

        data.places[i].people[j].onCancel = () => {
          setDisembarkations(previous => {
            const cloned = clone(previous);

            cloned.places[i].people[j].selected = false;

            return cloned;
          });
        };
      }
    }

    setDisembarkations(data);
  });

  return disembarkations;
};

export default useDisembarkations;
