import React, { useState } from 'react'
import faqBanner from './assets/images/faq_banner.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Form } from 'rsuite'
import { useCallback } from 'react'
// import Particles from "react-particles";
// import { loadSlim } from "tsparticles-slim";

const Contact = () => {
  const navigate = useNavigate()

  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [subject, SetSubject] = useState('')
  const [mainmessage, SetMessage] = useState('')
  const handleError = (err) =>
    toast.error(err, {
      position: 'top-left',
    })
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'top-right',
    })
  const handleSubmit = async () => {
    //  alert('hit')

    // setFormSubmitted(true); // Set formSubmitted to true when the button is clicked
    // if (name == '' || email == '' || message == '' || subject == '') {
    //     return
    // }
    try {
      const formData = {
        name,
        email,
        subject,
        message: mainmessage,
      }

      // const apiUrl = 'http://localhost:4000/contact';
      const apiUrl = 'https://signtruckapi.signtruck.ca/contact'

      // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/create-booking';
      // Then, send the formData with axios
      const response = await axios.post(apiUrl, formData, {})

      const { success, message } = response.data
      if (success) {
        handleSuccess(message)
        setTimeout(() => {
          // navigate("/");
        }, 1000)
      } else {
        console.log(response.data, 'SSSS')
        // alert(message);
        handleError(message)
      }
    } catch (error) {
      handleError()

      console.error('API request failed', error)
    }
  }

  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);

  return (
    <>
      <section className='contact_sec'>
        <div className='contact_inner'>
          {/* <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                fullScreen: {enable: false},
                background: {
                  color: { value: "#fff" },
                  image: "",
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "cover",
                  opacity: 1
                },
                backgroundMask: {
                  composite: "destination-out",
                  cover: { color: { value: "#fff" }, opacity: 1 },
                  enable: false
                },
                defaultThemes: {},
                delay: 0,
                fullScreen: { enable: true, zIndex: 1 },
                detectRetina: true,
                duration: 0,
                fpsLimit: 120,
                interactivity: {
                  detectsOn: "window",
                  events: {
                    onClick: { enable: true, mode: "push" },
                    onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                      parallax: { enable: false, force: 60, smooth: 10 }
                    },
                    resize: { delay: 0.5, enable: true }
                  },
                  modes: {
                    trail: { delay: 1, pauseOnStop: false, quantity: 1 },
                    attract: {
                      distance: 200,
                      duration: 0.4,
                      easing: "ease-out-quad",
                      factor: 1,
                      maxSpeed: 50,
                      speed: 1
                    },
                    bounce: { distance: 200 },
                    bubble: {
                      distance: 400,
                      duration: 2,
                      mix: false,
                      opacity: 0.8,
                      size: 40,
                      divs: { distance: 200, duration: 0.4, mix: false, selectors: [] }
                    },
                    connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
                    grab: {
                      distance: 400,
                      links: { blink: false, consent: false, opacity: 1 }
                    },
                    push: { default: true, groups: [], quantity: 4 },
                    remove: { quantity: 2 },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                      factor: 100,
                      speed: 1,
                      maxSpeed: 50,
                      easing: "ease-out-quad",
                      divs: {
                        distance: 200,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad",
                        selectors: []
                      }
                    },
                    slow: { factor: 3, radius: 200 },
                    light: {
                      area: {
                        gradient: {
                          start: { value: "#ffffff" },
                          stop: { value: "#000000" }
                        },
                        radius: 1000
                      },
                      shadow: { color: { value: "#000000" }, length: 2000 }
                    }
                  }
                },
                manualParticles: [],
                particles: {
                  bounce: {
                    horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
                    vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 }
                  },
                  collisions: {
                    absorb: { speed: 2 },
                    bounce: {
                      horizontal: {
                        random: { enable: false, minimumValue: 0.1 },
                        value: 1
                      },
                      vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 }
                    },
                    enable: false,
                    maxSpeed: 50,
                    mode: "bounce",
                    overlap: { enable: true, retries: 0 }
                  },
                  color: {
                    value: "#28a554",
                    animation: {
                      h: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true
                      },
                      s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true
                      },
                      l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        delay: 0,
                        decay: 0,
                        sync: true
                      }
                    }
                  },
                  groups: {},
                  move: {
                    angle: { offset: 0, value: 90 },
                    attract: { distance: 200, enable: false, rotate: { x: 600, y: 1200 } },
                    center: { x: 50, y: 50, mode: "percent", radius: 0 },
                    decay: 0,
                    distance: {},
                    direction: "none",
                    drift: 0,
                    enable: true,
                    gravity: {
                      acceleration: 9.81,
                      enable: false,
                      inverse: false,
                      maxSpeed: 50
                    },
                    path: {
                      clamp: true,
                      delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
                      enable: false,
                      options: {}
                    },
                    outModes: {
                      default: "out",
                      bottom: "out",
                      left: "out",
                      right: "out",
                      top: "out"
                    },
                    random: false,
                    size: false,
                    speed: 2,
                    spin: { acceleration: 0, enable: false },
                    straight: false,
                    trail: { enable: false, length: 10, fill: {} },
                    vibrate: false,
                    warp: false
                  },
                  number: {
                    density: { enable: true, width: 1920, height: 1080 },
                    limit: 0,
                    value: 80
                  },
                  opacity: {
                    random: { enable: false, minimumValue: 0.1 },
                    value: { min: 0.1, max: 0.5 },
                    animation: {
                      count: 0,
                      enable: true,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: false,
                      mode: "auto",
                      startValue: "random",
                      destroy: "none",
                      minimumValue: 0.1
                    }
                  },
                  reduceDuplicates: false,
                  shadow: {
                    blur: 0,
                    color: { value: "#000" },
                    enable: false,
                    offset: { x: 0, y: 0 }
                  },
                  shape: {
                    close: true,
                    fill: true,
                    options: {
                      character: {
                        value: ["S","I","G","N","T","R","U","C","K"],
                        font: "Verdana",
                        style: "",
                        weight: "400",
                        fill: true
                      },
                    },
                    type: "char"
                  },
                  size: {
                    random: { enable: false, minimumValue: 1 },
                    value: 30,
                    animation: {
                      count: 10,
                      enable: false,
                      speed: 10,
                      decay: 0,
                      delay: 0,
                      sync: false,
                      mode: "auto",
                      startValue: "random",
                      destroy: "none",
                      minimumValue: 10
                    }
                  },
                  stroke: {
                    width: 10,
                    color: {
                      value: "#28a554",
                      animation: {
                        h: {
                          count: 0,
                          enable: false,
                          offset: 0,
                          speed: 1,
                          delay: 0,
                          decay: 0,
                          sync: true
                        },
                        s: {
                          count: 0,
                          enable: false,
                          offset: 0,
                          speed: 1,
                          delay: 0,
                          decay: 0,
                          sync: true
                        },
                        l: {
                          count: 0,
                          enable: false,
                          offset: 0,
                          speed: 1,
                          delay: 0,
                          decay: 0,
                          sync: true
                        }
                      }
                    }
                  },
                  zIndex: {
                    random: { enable: false, minimumValue: 0 },
                    value: 0,
                    opacityRate: 1,
                    sizeRate: 1,
                    velocityRate: 1
                  },
                  destroy: {
                    bounds: {},
                    mode: "none",
                    split: {
                      count: 1,
                      factor: { random: { enable: false, minimumValue: 0 }, value: 3 },
                      rate: {
                        random: { enable: false, minimumValue: 0 },
                        value: { min: 4, max: 9 }
                      },
                      sizeOffset: true
                    }
                  },
                  roll: {
                    darken: { enable: false, value: 0 },
                    enable: false,
                    enlighten: { enable: false, value: 0 },
                    mode: "vertical",
                    speed: 25
                  },
                  tilt: {
                    random: { enable: false, minimumValue: 0 },
                    value: 0,
                    animation: { enable: false, speed: 0, decay: 0, sync: false },
                    direction: "clockwise",
                    enable: false
                  },
                  twinkle: {
                    lines: { enable: false, frequency: 0.05, opacity: 1 },
                    particles: { enable: false, frequency: 0.05, opacity: 1 }
                  },
                  wobble: { distance: 5, enable: false, speed: { angle: 50, move: 10 } },
                  life: {
                    count: 0,
                    delay: {
                      random: { enable: false, minimumValue: 0 },
                      value: 0,
                      sync: false
                    },
                    duration: {
                      random: { enable: false, minimumValue: 0.0001 },
                      value: 0,
                      sync: false
                    }
                  },
                  rotate: {
                    random: { enable: false, minimumValue: 0 },
                    value: 0,
                    animation: { enable: false, speed: 0, decay: 0, sync: false },
                    direction: "clockwise",
                    path: false
                  },
                  orbit: {
                    animation: {
                      count: 0,
                      enable: false,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: false
                    },
                    enable: false,
                    opacity: 1,
                    rotation: { random: { enable: false, minimumValue: 0 }, value: 45 },
                    width: 1
                  },
                  links: {
                    blink: false,
                    color: { value: "#28a554" },
                    consent: false,
                    distance: 150,
                    enable: true,
                    frequency: 1,
                    opacity: 0.4,
                    shadow: { blur: 5, color: { value: "#000" }, enable: false },
                    triangles: { enable: false, frequency: 1 },
                    width: 0,
                    warp: false
                  },
                  repulse: {
                    random: { enable: false, minimumValue: 0 },
                    value: 0,
                    enabled: false,
                    distance: 1,
                    duration: 1,
                    factor: 1,
                    speed: 1
                  }
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                responsive: [],
                smooth: false,
                style: {},
                themes: [],
                zLayers: 100,
                motion: { disable: false, reduce: { factor: 4, value: true } }
              }}
          /> */}
          <div className='custom-container'>
            <div className='custom_row justify-content-center'>
              <div className='ttlWrap text-center mb-3'>
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className='contForm'>
              <Form onSubmit={handleSubmit}>
                <div className='formGrp'>
                  <label for='name'>Name</label>
                  <input type='text' placeholder='Enter Your Name' id='name' value={name} onChange={(event) => SetName(event.target.value)} />
                </div>
                <div className='formGrp'>
                  <label for='email'>Email</label>
                  <input type='email' placeholder='Enter Your Email' id='email' value={email} onChange={(event) => SetEmail(event.target.value)} />
                </div>
                <div className='formGrp'>
                  <label for='subject'>Subject</label>
                  <input
                    type='text'
                    placeholder='Type The Subject'
                    id='subject'
                    value={subject}
                    onChange={(event) => SetSubject(event.target.value)}
                  />
                </div>
                <div className='formGrp'>
                  <label for='msg'>Message</label>
                  <textarea
                    placeholder='Type Your Message Here...'
                    id='msg'
                    value={mainmessage}
                    onChange={(event) => SetMessage(event.target.value)}
                  ></textarea>
                </div>
                <div className='formSubmit'>
                  <input type='submit' value='Submit' className='fullButn butn butn_success' onClick={handleSubmit} />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
