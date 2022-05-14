import React from 'react'

const Piash = () => {
    return (
        <div>
            <div id="card-success" class="visible">
                <i class="fa fa-user"></i>
                <p style={{ color: 'green' }}>Md. Al Amin</p>
            </div>
            <div id="card-success" class="visible">
                <i class="fa fa-check"></i>
                <p>Payment Successful!</p>
            </div>
            <div id="form-container">

                <div id="card-front">
                    <div id="shadow"></div>
                    <div id="image-container">
                        <span id="amount">Total Paying: <strong>1502৳</strong></span>
                        <span id="card-image">

                        </span>
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Seat <br />Fee
                        </label>
                        <input type="text" id="card-holder" placeholder="800৳" />
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Wifi <br />bill
                        </label>
                        <input disabled type="text" id="card-holder" placeholder="143৳" />
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Filter <br /> kit
                        </label>
                        <input type="text" id="card-holder" placeholder="172৳" />
                    </div>
                    <div id="cardholder-container-up">
                        <label for="card-holder">Mess <br />Charge
                        </label>
                        <input type="text" id="card-holder" placeholder="387৳" />
                    </div>


                    <div id="cardholder-container">
                        <label for="card-holder">Card Holder
                        </label>
                        <input type="text" id="card-holder" placeholder="Md. Al Amin" />
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
                        <input id="card-cvc" placeholder="301" type="text" min-length="3" max-length="4" />

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

export default Piash