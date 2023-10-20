import React from 'react';
import ManAvatar3 from './images/man_avatar3.jpg';

function Chat() {
  return (
    <div className="content ">
            
        <div className="chat-block">

            <div className="chat-sidebar">

                <div className="chat-sidebar-header">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All Chats</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Calls</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contacts</a>
                        </li>
                    </ul>
                    <form className="my-4">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </form>
                </div>

                <div className="chat-sidebar-content" tabindex="1">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="chat-lists">
                                <div className="list-group list-group-flush">
                                    <div className="list-group-item d-flex align-items-center active">
                                        <div className="pe-3">
                                            <span className="avatar avatar-state-warning">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </span>
                                        </div>
                                        <div className="flex-grow- 1">
                                            <p className="mb-1">Cyril Ralston</p>
                                            <span className="text-muted">
                                             <i class="uil uil-image me-1"></i> Photo
                                            </span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">Yesterday</span>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex align-items-center unread-message">
                                        <div className="pe-3">
                                            <div className="avatar avatar-info avatar-state-danger">
                                                <span className="avatar-text rounded-circle">M</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-1">Michelina Mackley</p>
                                            <span className="text-muted">Hello how are you?</span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">2:32 PM</span>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex align-items-center unread-message">
                                        <div className="pe-3">
                                            <div className="avatar avatar-state-success">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-1">Jessi Maylin</p>
                                            <span className="text-muted">Hi!</span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">08:27 PM</span>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                                <span className="avatar avatar-state-info">
                                                    <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                                </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-1">Hobie Kember</p>
                                            <span className="text-muted">
                                                    <i className="uil uil-video me-1"></i> Video
                                                </span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">Last week</span>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <span className="avatar avatar-warning avatar-state-secondary">
                                                <span className="avatar-text rounded-circle">D</span>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1">Dudley Laborde</p>
                                            <span className="text-muted">Hello how are you?</span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">2:32 PM</span>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <span className="avatar avatar-state-success">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1">Boony Gidden</p>
                                            <span className="text-muted">Hi!</span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">08:27 PM</span>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <span className="avatar avatar-state-danger">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </span>
                                        </div>
                                        <div className="flex-grow- 1">
                                            <p className="mb-1">Vivianne Sothcott</p>
                                            <span className="text-muted">
                                                    <i className="bi bi-image me-1"></i> Photo
                                                </span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">Yesterday</span>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <span className="avatar avatar-state-warning">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-1">Brandais Reisen</p>
                                            <span className="text-muted">
                                                    <i className="uil uil-video me-1"></i> Video
                                                </span>
                                        </div>
                                        <div className="text-end ms-auto d-flex flex-column">
                                            <div className="dropdown ms-auto">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#" className="dropdown-item">Profile</a>
                                                    <a href="#" className="dropdown-item">View Chat</a>
                                                    <a href="#" className="dropdown-item">Mark as read</a>
                                                    <a href="#" className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                            <span className="small text-muted">Last week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="list-group list-group-flush">
                                <a href="#" className="list-group-item d-flex align-items-center">
                                    <div className="pe-3">
                                        <div className="avatar avatar-state-warning">
                                            <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-1">Orelie Rockhall</p>
                                        <div className="text-muted d-flex align-items-center">
                                            <i class="uil uil-corner-left-down text-danger small me-2"></i>
                                            Today, 03:11 AM
                                        </div>
                                    </div>
                                    <div className="text-end ms-auto">
                                        <i class="uil uil-video text-danger"></i>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item d-flex align-items-center">
                                    <div className="pe-3">
                                        <div className="avatar avatar-state-success">
                                            <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-1">Barbette Bolf</p>
                                        <div className="text-muted d-flex align-items-center">
                                            <i className="uil uil-arrow-up me-1 text-success small"></i>
                                            Today, 03:11 AM
                                        </div>
                                    </div>
                                    <div className="text-end ms-auto">
                                        <i className="uil uil-phone text-success"></i>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item d-flex align-items-center">
                                    <div className="pe-3">
                                        <div className="avatar avatar-state-warning">
                                            <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow- 1">
                                        <p className="mb-1">Natale Janu</p>
                                        <div className="text-muted d-flex align-items-center">
                                            <i className="uil uil-arrow-up me-1 text-success small"></i>
                                            Today, 03:11 AM
                                        </div>
                                    </div>
                                    <div className="text-end ms-auto">
                                        <i className="uil uil-phone text-success"></i>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item d-flex align-items-center">
                                    <div className="pe-3">
                                        <div className="avatar avatar-info avatar-state-secondary">
                                            <span className="avatar-text rounded-circle">T</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-1">Terra Fehner</p>
                                        <div className="text-muted d-flex align-items-center">
                                            <i className="uil uil-arrow-down me-1 text-danger small"></i>
                                            Today, 03:11 AM
                                        </div>
                                    </div>
                                    <div className="text-end ms-auto">
                                        <i className="uil uil-video text-danger"></i>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item d-flex align-items-center">
                                    <div className="pe-3">
                                        <div className="avatar avatar-state-info">
                                            <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-1">Orelie Rockhall</p>
                                        <div className="text-muted d-flex align-items-center">
                                            <i className="uil uil-arrow-up me-1 text-success small"></i>
                                            Today, 03:11 AM
                                        </div>
                                    </div>
                                    <div className="text-end ms-auto">
                                        <i className="uil uil-phone text-success"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-secondary avatar-state-danger">
                                                <span className="avatar-text rounded-circle">A</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-1">Alene Ranyelld</p>
                                            <div className="text-muted">United Kingdom</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-state-success">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-1">Chloette Fewster</p>
                                            <div className="text-muted">Estonia</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-state-warning">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </div>
                                        </div>
                                        <div className="flex-grow- 1">
                                            <p className="mb-1">Stephanus Shergill</p>
                                            <div className="text-muted">Austria</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-state-info">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-1">Elvyn Frowde</p>
                                            <div className="text-muted">Canada</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-success avatar-state-secondary">
                                                <span className="avatar-text rounded-circle">A</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-1">Alene Ranyelld</p>
                                            <div className="text-muted">Canada</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-state-success">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-1">Chloette Fewster</p>
                                            <div className="text-muted">Spain</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-state-danger">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </div>
                                        </div>
                                        <div className="flex-grow- 1">
                                            <p className="mb-1">Stephanus Shergill</p>
                                            <div className="text-muted">Romania</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <div className="pe-3">
                                            <div className="avatar avatar-state-warning">
                                                <img src={ManAvatar3} className="rounded-circle" alt="image"/>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-1">Elvyn Frowde</p>
                                            <div className="text-muted">New Zealand</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown">
                                                    <i className="uil uil-ellipsis-h"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">Chat</a>
                                                    <a href="#" className="dropdown-item">Voice call</a>
                                                    <a href="#" className="dropdown-item">Video call</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="chat-content chat-mobile-open">

                <div className="messages" tabindex="4">
                    <div className="message-item">
                        <div className="message-item-content">Hi!</div>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                    <div className="message-item me">
                        <div className="message-item-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Exercitationem fuga iure iusto libero, possimus quasi quis repellat sint tempora ullam!
                        </div>
                        <span className="time small text-muted font-italic">Yesterday</span>
                    </div>
                    <div className="message-item">
                        <div className="message-item-content">Hello! How are you today?</div>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                    <div className="message-item me">
                        <div className="message-item-content">Lorem ipsum dolor sit.</div>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                    <div className="message-item">
                        <div className="message-item-content d-flex">
                            <i className="bi bi-file-earmark-text me-2"></i>
                            <div>
                                <div>important_documents.pdf <i className="text-muted small">(50KB)</i></div>
                                <ul className="list-inline small">
                                    <li className="list-inline-item">
                                        <a href="#">Download</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">View</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                    <div className="message-item me">
                        <div className="message-item-content">Lorem ipsum dolor sit.</div>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                    <div className="message-item">
                        <div className="message-item-content">Lorem ipsum dolor sit.</div>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                    <div className="message-item me message-media">
                        <img src={ManAvatar3} alt="image"/>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                    <div className="message-item message-item-divider">
                        <span>Today</span>
                    </div>
                    <div className="message-item">
                        <div className="message-item-content">Lorem ipsum dolor sit.</div>
                        <span className="time small text-muted font-italic">02:30 PM</span>
                    </div>
                </div>

                <div className="chat-footer">
                    <form className="d-flex">
                        <div className="dropdown flex-shrink-0 me-3">
                            <button className="btn btn-primary btn-rounded" type="button" data-bs-toggle="dropdown">
                                <i className="uil uil-ellipsis-h"></i>
                            </button>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Add Emoji</a>
                                <a href="#" className="dropdown-item">Attach files</a>
                            </div>
                        </div>
                        <input type="text" className="form-control" autofocus="" placeholder="Write message..."/>
                        <button className="btn btn-primary btn-rounded flex-shrink-0 ms-3">Send</button>
                    </form>
                </div>
            </div>
        </div>

            </div>
    
  );
}

export default Chat;
