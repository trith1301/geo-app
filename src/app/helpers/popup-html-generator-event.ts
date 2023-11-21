const popupHTMLGeneratorEvent = (data: any) => {
  return `
    <div>
      <h3>${data.name}</h3>
      <ul style="padding-left: 0; list-style-type: none;">
        <li>Lat: ${data.lat}</li>
        <li>Lng: ${data.lng}</li>
        <li>
          Status:
          <select class="place-popup-${data.id}">
            <option value="pending" ${
              data.status == 'pending' ? 'selected' : ''
            }>Pending</option>
            <option value="approved" ${
              data.status == 'approved' ? 'selected' : ''
            }>Approved</option>
            <option value="declined" ${
              data.status == 'declined' ? 'selected' : ''
            }>Declined</option>
          </select>
        </li>
        <li>Address: ${data.address}</li>
      </ul> 
    </div>
  `;
};

export default popupHTMLGeneratorEvent;
