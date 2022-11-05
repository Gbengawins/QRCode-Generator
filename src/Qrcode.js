import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function Qrcode () {
    const [ value, setValue ] = useState();
    const [ back, setBack ] = useState('#ffffff');
    const [ fore, setFore ] = useState('#000000');
    const [ size, setSize ] = useState('256');

  return (
    <div className="qrcode">
      <center>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qrcode"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setBack(e.target.value)}
          placeholder="Background color"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setFore(e.target.value)}
          placeholder="Foreground color"
        />
        <br />
        <br />
        <input
          type="number"
          onChange={(e) =>
            setSize(parseInt(e.target.value === "" ? 0 : e.target.value, 10))
          }
          placeholder="Give Size of Qr-code"
        />
        <br />
        <br />
        {value && (
        <QRCode
        title="iBukunMedia"
            value={ value }
            bgColor={ back }
            fgColor={ fore }
            size={ size === "" ? 0 : size }
        />
        ) }
      </center>
    </div>
  );
}

export default Qrcode