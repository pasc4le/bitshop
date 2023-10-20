import React from 'react';
import ComingSoon from './images/coming-soon.jpg';

function OnlineStore() {
  return (
    <div class="content ">
            
        <div class="row row-cols-1 g-4 mt-0">
            <div class="col-12 mt-0">
                <div class="text-center store-img-wrap">
                    <img src={ComingSoon} alt="Coming Soon" width="100%"/>
                    
                </div>
            </div>
        </div>

    </div>
    
  );
}

export default OnlineStore;
