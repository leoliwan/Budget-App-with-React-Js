import React from 'react';

const BalanceDisplay = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Budget</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">10000</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Expenses</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">8000</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Balance</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">2000</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceDisplay
