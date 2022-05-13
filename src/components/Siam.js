import React from 'react'

const Siam = () => {
    return (
        <div>
            <div id="card-success" class="visible">
                <i class="fa fa-user"></i>
                <p style={{ color: 'green' }}>Sanjatul Siam</p>
            </div>
            <div id="card-success" class="visible">
                <i class="fa fa-times" style={{ color: 'red' }}></i>
                <p style={{ color: 'red' }}>Payment Due!</p>
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
                        <label for="card-holder">Filter kit
                        </label>
                        <input type="text" id="card-holder" placeholder="172৳" />
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Mess Charge
                        </label>
                        <input type="text" id="card-holder" placeholder="109৳" />
                    </div>


                    <div id="cardholder-container">
                        <label for="card-holder">Card Holder
                        </label>
                        <input type="text" id="card-holder" placeholder="Sanjatul Siam" />
                    </div>

                    <div id="exp-container">
                        <label for="card-exp">
                            Pay Date
                        </label>
                        <input id="card-month" type="text" placeholder="MM" length="2" />
                        <input id="card-year" type="text" placeholder="YY" length="2" />
                    </div>
                    <div id="cvc-container">
                        <label for="card-cvc"> Room number</label>
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

export default Siam