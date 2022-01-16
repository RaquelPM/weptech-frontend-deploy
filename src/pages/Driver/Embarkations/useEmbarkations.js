import { useState } from 'react';

import { useApiEffect } from '~/hooks';
import { getEmbarkations } from '~/services/driver/embarkations';

const useEmbarkations = () => {
  const [embarkations, setEmbarkations] = useState({
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
          setEmbarkations(previous => {
            const cloned = clone(previous);

            cloned.places[i].people[j].selected = true;

            return cloned;
          });
        };

        data.places[i].people[j].onCancel = () => {
          setEmbarkations(previous => {
            const cloned = clone(previous);

            cloned.places[i].people[j].selected = false;

            return cloned;
          });
        };
      }
    }

    setEmbarkations(data);
  });

  return embarkations;
};

export default useEmbarkations;
