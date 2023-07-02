const React = require('react');
const Def = require('../default.jsx');

function edit_form(data) {
    // console.log(data);
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor='name' >Place Name : </label>
                            <input
                                className="form-control"
                                id="name" type="text"
                                name="name"
                                value={data.place.name}
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor='pic' >Place Picture : </label>
                            <input
                                className="form-control"
                                id="pic"
                                type="url"
                                name="pic"
                                value={data.place.pic}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor='city' >City : </label>
                            <input
                                className="form-control"
                                id="city"
                                type="text"
                                name="city"
                                value={data.place.city}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor='state' >State : </label>
                            <input
                                className="form-control"
                                id="state"
                                type="text"
                                name="state"
                                value={data.place.state}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor='cuisines' >Cuisines : </label>
                            <input
                                className="form-control"
                                id="cuisines"
                                type="text"
                                name="cuisines"
                                value={data.place.cuisines}
                                required
                            />
                        </div>
                    </div>
                        <input
                            className='btn btn-primary'
                            id="submit"
                            type="submit"
                            value="Add Place"
                        />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form;