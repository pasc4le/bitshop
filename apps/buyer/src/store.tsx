import React, { useEffect, useState } from 'react';
//@ts-ignore
import bigBadge1 from './images/badges/big-badge1.png';
//@ts-ignore
import bigBadge2 from './images/badges/big-badge2.png';
//@ts-ignore
import bigBadge3 from './images/badges/big-badge3.png';
//@ts-ignore
import compnyLogo from './images/details/c-logo.png';
import { redirect, useSearchParams } from 'react-router-dom';
import { StallEvent, getCategoryForStall, getImageForStall, getStallsByPubkey } from './lib/nip15';

function StallCard(props: { stall: StallEvent }) {
    const name = props.stall.content.name;
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const href = `/stall?id=${props.stall.content.id}`;

    useEffect(() => {
        getCategoryForStall({
            stallEvtId: props.stall.id,
            content: props.stall.content
        }).then((cat) => {
            setCategory(cat);
        }).catch((err) => {
            console.info("Failed to get category for stall", err);
        });

        getImageForStall({
            stallId: props.stall.tags[0][1],
            author: props.stall.pubkey,
        }).then((img) => {
            setImage(img);
        }).catch((err) => {
            console.info("Failed to get image for stall", err);
        });
    }, []);


    return (
        <div className='col-6 col-md-4 col-lg-3'>
            <a href={href} className='p-box'>
                {category && <span className='p-cat mb-0 d-block'>{category}</span>}
                { /* <span className='featured d-block'>Featured</span> */}
                <div className='text-center'>
                    {image && <img src={image} alt="Product" />}
                </div>
                <p><strong>{name}</strong></p>
                <p style={{ fontWeight: "300" }}>{props.stall.content.description || "No description provided"}</p>
                {
                    /*
                <div className='ratings'>
                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                    <span><i className="fa fa-star" aria-hidden="true"></i></span>
                </div>
                */
                }
            </a>
        </div>
    )
}

export default function Store(props) {
    const [params, _] = useSearchParams();
    const _id = params.get('id');

    if (_id === null) {
        redirect("/404");
    }

    const id = _id as string;

    const [stalls, setStalls] = useState<StallEvent[]>([]);
    const onNew = (ns: StallEvent) => {
        if (stalls.map(ss => ss.id).includes(ns.id)) {
            return;
        }

        setStalls((old) => {
            return [...old, ns];
        });
    }


    useEffect(() => {
        getStallsByPubkey(id, onNew).then((_) => {
            console.debug("All stalls loaded");
        })

    }, [id]);


    return (
        <div>
            <div className='store-banner-wrap'>
                <div className='store-banner'>
                    <div className='text-center banner-text'>
                        <h2>Your one stop shop for all apple products.</h2>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='store-name text-center'>
                    <span className='store-logo'>
                        <img src={compnyLogo} alt="Company Logo" width='40%' />
                    </span>
                    <h6>
                        <span>
                            <img src={compnyLogo} alt='Company Logo' />
                            <span className='ms-2'><strong>B-Premio</strong></span>
                        </span>
                    </h6>
                </div>
            </div>

            <div className='container-fluid store-wrap'>
                <div className='row pt-4'>
                    <div className='col-12 col-md-4'>
                        <div className='card store-details'>
                            <div className='block'>
                                <h5><span><i className="fa fa-globe" aria-hidden="true"></i></span> About</h5>
                                <p>B-Premio is a your perfect destination for all your Apple products & services.
                                    We are specialised in simplify their product and service.B-Premio is your premier
                                    destination for all Apple electronic needs. We are the most renowned Apple
                                    Authorized Reseller </p>
                            </div>

                            <div className='mt-4'>
                                <h5><span><i className="uil uil-award"></i></span> Badges</h5>
                                <div className='mt-2'>
                                    <img src={bigBadge1} alt="badge" className='me-1' />
                                    <img src={bigBadge2} alt="badge" className='me-1' />
                                    <img src={bigBadge3} alt="badge" className='me-1' />
                                </div>
                            </div>
                            <div className='mt-3 mt-2 store-contact'>
                                <p className='mb-0'><span className='me-2'><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                    27 Maracoir Street, Mannady San Francisco, California, United States (US)</p>
                            </div>
                            <div className='mt-2 store-contact'>
                                <p className='mt-3 mb-0'><span className='me-2'><i className="fa fa-phone" aria-hidden="true"></i></span>
                                    1800123123</p>
                            </div>
                            <div className='mt-2 store-contact'>
                                <p className='mt-3 mb-0'><span className='me-2'><i className="uil uil-store"></i></span>
                                    Store Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-8 card'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <h6>Products</h6>
                            </div>
                            <div className='col-12 col-md-6 text-end search-product'>
                                <div className="input-group mb-0">
                                    <span className="input-group-text" id="basic-addon1"><i className="uil uil-search"></i></span>
                                    <input type="text" className="form-control" placeholder="Search all Samsung Brand stc" aria-label="" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div className='product-wrap mt-4'>
                            <div className='row'>
                                {
                                    stalls.map(s => <StallCard key={s.id} stall={s} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

