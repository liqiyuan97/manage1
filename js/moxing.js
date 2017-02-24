var hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77,
  checkAvailability: function(){
    return this.rooms - this.booked;
  }
};

var emName = document.getElementById('name');
emName.textContent = hotel.name;

var emRooms = document.getElementById('rooms');
emRooms.textContent = hotel.checkAvailability();