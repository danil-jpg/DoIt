import React, { useState } from 'react';
import { editAdminData } from '../../../../../store/store';
import EditPlayersAdmin from '../../EditAdmin/EditPlayersAdmin/EditPlayersAdmin';
import s from './CreatePage.module.scss';


const CreatePage = () => {
  const [state, setState] = useState(editAdminData.players);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <EditPlayersAdmin state={state} btnOff={true} />
    </div>
  );
};

export default CreatePage;
