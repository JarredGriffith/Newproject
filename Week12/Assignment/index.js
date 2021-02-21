class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }

    addRoom(name, area) {
        this.rooms.push(new Rooms(name, area));
    }
}


class Rooms {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}


class HouseServvice {
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    //gets all houses
    static getAllHouses() {
        return $.get(this.url);
    }

    //get a singal house
    static getHouse(id) {
        return $.get(this.url + `/${id}`);
    }
//post to URL and pushing house to it
    static createHouse(house) {
        return $.post(this.url, house);
    }

    //find house 
    static updateHouse(house) {
        return $.ajax({
            url: this.url + `/${house._id}`,
            datatype: 'json',
            data: JSON.stringify(house),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deleteHouse(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        })
    }
}


class DOMManager {
    static houses;

    static getAllHouses() {
        HouseServvice.getAllHouses().then(houses => this.render(houses));
    }

    static createHouse(name) {
        HouseServvice.createHouse(new House(name))
            .then(() => {
                return HouseServvice.getAllHouses();
            })
            .then((houses) => this.render(houses))
    }

    static deleteHouse(id) {
        //this funiton was made in houseservices, so we call it and then redener the houses again.
        HouseServvice.deleteHouse(id).then(() => {
                //then request all houses again and then render the houses
                return HouseServvice.getAllHouses();
            })
            .then((houses) => this.render(houses))
    }

    static addRoom(id) {
        for (let house of this.houses) {
            //finds making house ID.
            if (house._id == id) {
                //finds matching room id then call to the room class
                house.rooms.push(new Rooms($(`#${house._id}-room-name`).val(), $(`#${house._id}-room-area`).val()));
                HouseServvice.updateHouse(house)
                    .then(() => {
                        return HouseServvice.getAllHouses();
                    })
                    .then((houses) => this.render(houses))
            }
        }
    }

    static deleteRoom(houseId, roomId) {
        for (let house of this.houses) {
            //find matching house Id
            if (house._id == houseId) {
                for (let room of house.rooms) {
                    //finds the matching room id
                    if (room._id == roomId) {
                        house.rooms.splice(house.rooms.indexOf(room), 1);
                        //re-renders the houses and rooms
                        HouseServvice.updateHouse(house)
                            .then(() => {
                                return HouseServvice.getAllHouses();
                            })
                            .then((houses) => this.render(houses))
                    }
                }
            }
        }
    }

    static render(houses) {
        this.houses = houses;
        //clears house the house then remakes them. 
        $('#app').empty();
        for (let house of houses) {
            $('#app').prepend(
                `<div id="${house._id}" class="card">
                    <div class="card-header">
                        <h2>${house.name}</h2>
                        <button class="btn btn-danger" onclick="DOMManager.deleteHouse('${house._id}')"> Delete </button>
                    </div>
                        <div class="card-body">
                            <div class="card">
                                <div class="row"> 
                                    <div class="col-sm"> 
                                        <input type="text" id="${house._id}-room-name" class="form-control" placeholder="room name">
                                    </div>
                                    <div class="col-sm">
                                    <input type="text" id="${house._id}-room-area" class="form-control" placeholder="room area">
                                    </div>
                                </div>
                                <bitton id="${house._id}-new-room" onclick="DOMManager.addRoom('${house._id}')" class="btn btn-primary form-control">Add</button>
                             </div>
                        </div>
                </div>  <br>      
                `);
            for (let room of house.rooms) {
                $(`#${house._id}`).find('.card-body').append(
                    `<p>
                            <span id="name-${room._id}"><strong> Name : </strong> ${room.name} </span>
                            <span id="name-${room._id}"><strong> Area : </strong> ${room.area} </span>
                            <button class="btn btn-danger" onclick="DOMManager.deleteRoom('${house._id}','${room._id}')">Delete Room</button>`
                )
            }
        }

    }
}

$('#create-new-house').click(() => {
    DOMManager.createHouse($('#new-house-name').val());
    $('#new-house-name').val('')
})
DOMManager.getAllHouses();