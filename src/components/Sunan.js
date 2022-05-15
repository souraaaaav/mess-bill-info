import React from 'react'

const Sunan = () => {
    return (
        <div>
            <div id="card-success" class="visible">
                <i class="fa fa-user"></i>
                <p style={{ color: 'green' }}>Sunaan Sultan</p>
            </div>
            <div id="card-success" class="visible">
                <i class="fa fa-check"></i>
                <p>Payment Successful!</p>
            </div>
            <div id="form-container">

                <div id="card-front">
                    <div id="shadow"></div>
                    <div id="image-container">
                        <span id="amount">Total Paying: <strong>1574৳</strong></span>
                        <span id="card-image">

                        </span>
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Seat <br />Fee
                        </label>
                        <input type="text" id="card-holder" placeholder="1150৳" />
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Wifi <br /> bill
                        </label>
                        <input type="text" id="card-holder" placeholder="143৳" />
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Filter <br />kit
                        </label>
                        <input type="text" id="card-holder" placeholder="172৳" />
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Mess <br />Charge
                        </label>
                        <input type="text" id="card-holder" placeholder="109৳" />
                    </div>


                    <div id="cardholder-container">
                        <label for="card-holder">Card Holder
                        </label>
                        <input type="text" id="card-holder" placeholder="Sunaan Sultan" />
                    </div>

                    <div id="exp-container">
                        <label for="card-exp">
                            Pay Date
                        </label>
                        <input id="card-month" type="text" placeholder="15 May" length="2" />
                        <input id="card-year" type="text" placeholder="2022" length="2" />
                    </div>
                    <div id="cvc-container">
                        <label for="card-cvc"> Room <br />number</label>
                        <input id="card-cvc" placeholder="303" type="text" min-length="3" max-length="4" />

                    </div>

                </div>

                <div id="card-back">
                    <div id="card-stripe">
                    </div>

                </div>

                <input type="text" id="card-token" />

            </div>
            <hr />
            <hr />

        </div>
    )
}

export default Sunan