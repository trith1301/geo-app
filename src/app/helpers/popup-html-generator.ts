const popupHTMLGenerator = (data: any) => {
  return `
    <div>
      <h3>${data.name}</h3>
      <ul style="padding-left: 0; list-style-type: none;">
        <li>Lat: ${data.lat}</li>
        <li>Lng: ${data.lng}</li>
        <li>
          Status: <bold class='status-${data.status}'>${data.status}
        </li>
        <li>Address: ${data.address}</li>
      </ul> 
    </div>
  `;
};

export default popupHTMLGenerator;
