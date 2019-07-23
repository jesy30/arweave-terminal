import React from 'react';
import logo from './logo.png';
import './App.css';

import { Fragment } from 'react';

import Arweave from 'arweave/web';
import Terminal from 'terminal-in-react';
import axios from 'axios';

const arweave = Arweave.init({
  host: 'arweave.net', 
  port: 1984, 
  protocol: 'https'
});


export default class App extends React.Component {
  constructor(props) {
    super(props);

 
  }


  componentDidMount() {
    
  }  


  render() {
    return (
      <Fragment>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand mx-auto" href="#">

          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwBAMAAAAZD678AAAAFVBMVEVHcEwASlQAR1IASVMASVQASVQASlXN0SNFAAAABnRSTlMAfRpE1qe4A+XaAAAgAElEQVR42uzdTXMbxxWFYUIg9nRS4VqpAr1WKgzWKrnCNWNXsI4sEv//J8SyZJofADkDTPfc7vu8O9MiAXSfvn36npnB2RkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID7LD8YABbj8bAwwPVe73c9GAVPz7ma3u3tvHDAxm91vfDEOmJbF7ncujAQmZftNWPdGAlOy3n3nk7HAdCx3D3wwGpjWuX9DMwuTsdo9gn/HRHxtYf2JZhYm4nr3hJ+MCCZ27vw7puPyubD4d0zA1e4FwmhM7Nz5d0zEZrcHYTROZLHby4WRwUls9wtLGI2TWD/uXz3+D2E0TmD5xLE/8fEfjA6O5nEL6/ZpZsi/42hWz7uiz4QGHMPLrW+pmYXTuX5p1tfCaEzp3O/3tR/4d5zq3C/++OFCGI3TuNp/BNwIozGVc3/s0w/9HBjEwcp0pZmF43nFS10Ko3E0r5z+lsJoHMur/aprYTSO4/UOuzAaEzj325f/e6WZhWN4Uzj8O47gSavqw/itEtjLAHMujMZJzv3+iHYEcHa0gRJGYyQDIxthNI537u9P/3fAuEokjMYIRngnzSwMZ8RpTxiNwYzqTwmjMZBxHXVhNAYy8oZUd0ZjEKOvWnBnNAYwfmsTRmMAR5hxYTRGlZ/B7QNhNMYYpouhvySMxhscGdEIozHYuY/x4cJolKk8wmiU8UrCaBQ53QmjcZCT+lHCaAwoOuMduDAaA5z77fhfd2c0ygiDf8cbW9ndUVuZMBplzLcwGmXaBcJoFDFIwmg8Y6JIRhiNw879/fx/B50wWaURRqOMN9LMQpHTnDAaD0zafxJGY0+ROd1xC6Oxx7nfnv7n3BmNqZ37S/9+a3w596m2LmE0njn3T9P/SWE05z5de0AYjSINTWF0egod4YTRySkVGgujk3NdqrIIozn3Ml5IGM25Fzm9CaMTc1Wy3ySM5tyLOGxhdFo2ZTM9d0YnpXgXk3/PyfbUO5/H+HfNrDSsy5trYXRCqrQDhNH5qGKAhNHpWNXZpYTRyagVEgujk3Fd67J0YXRa517Y+2hmJXXuZVpYlU+fiMFVzXxYGJ3Sud9XfTXNrK7Z1LU97oxOwqL2RLszOgfb2q0lYXQK1vWb4cLoBCzniO+E0f1zOcccC6O7ZzXPriSM7py5QmFhdOdcz3XyF0Zz7uW93YWZ4NxLaFoY3RlXc+bBwugUzv1+1lfXzOqKzbw2x53RnbKY+2DGv/fJdu5WkjC6S9bzN7+F0R2yjOBwhNH9cRlhToXR3bGKsQsJozsjSggsjO6M6yiXnQujOffyXu/CzPTj3Evf+TxG48LoxrmKlP8Ko7t07veh3o1mVtNsYtkad0Z3wiLaRLozug+20VpHwuguWMdrdgujO2AZMZ4TRrfPZcQ5FEY3zyrmrrPh39smaugrjG6c66iV4Yp/59zzeD+0P3tL/r1driLnvdcuJu3Bud+Hfnf8e1NsYl9TJ4xulEX0iXMxaZtso281LiZtknV8c7x2MWl7NHGc38a5Fh9HGJiwcyaMbo5VG5GJMLoxWmkSaWY1xnUrlUAYzbkn9oJ4OVvRT1vC6Ia4aqk/5M7oJp37fVPvln8PzaatDG4hjG6D5iZqI4xugm1rW0tbW3da1u1dmXnFv8enyeO7ZpY5shpysmozIrkWRrfjg1tqCmlmWfkqLefOGyL97PDvgWm6H7R2Z3QLDrjBDvaWfw9K45mbMNrEWBiZaH4rEUYzvw4faejiuK6ZZU6sjhx0EokIowP73pabQMJoK13l5dx5RaSfDf49EF09Gc9j/kI63g461sLoKHSWsQmjTYSF0jPdbR3C6HBmt5MrL4XRjudl0MwyB1ZLn3QagQijA/ncnpo+wmgrWyXm3HlHDGPb7+jz7zNy3nO/x53RIRxuhx1qYfRcdJ6pCaMNvIXT00bY/VYhjJ7d3H7yEeE4PhzNLGNe3EZqZlUhSeQhjJ7R1/bc5BFGW8kqM+fOS2I/2zyjLYyuSKr+jmbWLI62/470O2F0LZJlaMJoA20hdeLcc2wNwmhm1kd2/G4JzSxjbDW1SdKIQxhd0cdmauoIo61clZrX4C3xjW3e0eXfC3KeuZ+jmVXFwSbsQAujS5E8MxNGG1gLq6WNMP1WIIwubl5/NgT8u+P2dGhmGVOrqw1EGr8jjC7oWzM3cYyDlapy8xa8ptFMP5rW2IT4mrVH6OcVcaw6zhKIyZCRPUEYbSAttMgo/awBs1p9SITRjtfTof1iDK22mIgw9iLimtCncu7GxcpUyXkJ3tPowZqbAuHzK+jvTeJQdZhfIJE4FpnYq8hQDZyFp9SzCsypIXK4cZwugnaMMbP6YiCyGITI6wRfyrkbJytRZecdeNHUo3VntKzBqRA+j0C/7yhHqqP8JhKKocjARiFTNVAWotLOOjCjDjsOO47PpYu8ZtYBNPysxhKIKI5CBDbCh3Luxs3KU+l5Bd7U6MCanAL9mBPQ/xvkQHWQRyOxOITM6yRkrAbGwlTKWQnm0+HH4cdxuQjaNcbE6qxDlUhi+Y8fQvDXYitHJPaK7yzm3P/16EXm5e6XlsexJWqstKtdIEodT4TR1b3BYheKUo0mXvXAaJS68/nxF5NG4L7hNar/cqBNFoIaHzR5P3BZYSGf3UQT1l2pTyrB2GcLSlmP1S4cpQ4pMtc9c/6lhniDUOyzCqMrtl5u4gnrrsaIJg6jq5jNxS4gxboBwuhqx+PziML6WMW1Zm1m1RmDTURh/dr4am3Guf9UR75hKDjl6cPoWqHpTURh3bc/rmHZVFpZIYV11/5OEJVqvbxdNmEl9+/VnusUUli79k/bDbSwyvZb8gkrcxi9rNchTiisxGF0xUwro7DShtGrih88o7DShtE1Wy0phZU0jK5qLlMKK2cYXfc4nFNYKZtZl1UNQFJhJWxmXdU9siQVVr4wunZImlVY6cLoTeW2cFZhZQujF7X3/rTCSubft7U/bV5hpfLv9cJnwsoURi/rO8rEwkoURs+QYWUWVpoweo4PmllYWcLox88TKvXMIsI61MzqOIyu79yzCytHGF3lmUWEla+ZdTnLhp9cWAmaWat5jijJhdV/GD1XKJpdWN2H0ZuZVk52YfUeRi/m2ut/CMlc3rY//75NcDpp4DTenX9fZ+intDD4nYXRy94dZDPbRWejn/UGyoAG94sPBgv7jVbKHOEzHs9An2E05z47XYbR84TPeEKPzaxLzj3W6u6kmeWbP0PQXRjtu4rNQ/GT7hwrRVbY586xmHtvT391Q6f+ffbwmbC69O/zt7AIa+9kNB5GP+n4vieseYXVURgdIKMirP2Gt+nMNsIHIaxYC33y0vuBsOYXVidhdIjwmbAe00UYHSN8JqzumlkxwmfC6q2ZtYpxBCGspzQfRkcJPQkr5rw0vzIIK+ZO0vxeTlgxve8ELax5Tx+EFfO0fiTnYfolhBWzv9h8h5ewXt1OGrsdL1AmRVgvaTaMjvTGCeuNhd9QM+tdpOt+COstq9JOMyuUOSSsfTQZRseKowjrzWZWK/491nsmrAZW/yCC3b9GWPtpLoyOFnISVhvz1NxKIKwBO0sDzaxwezdhDfHCF+GFFe60QVhDakD4MDpef4Sw2ug3jujonhFWbGE98e+xm1kBb4gkrA78e8TUnLDaKgR7iRQ+E9YQ/37ThH8P+Zgcwmrev8eMnwhr6CYTNoyOGZgT1mBbHDSMDvrwVMIa7t9vo7ewIoWahNXmvD0Q9TIMwmpzp4nt3AmrWW8c/t0RVrM14StxL84nrJabWYGfbUlYb8/eNqx/D5w5Eda4ZtYXb4ywui8McUspYQ3z7zGtTOjvaCGsZv37Y7nHi5vGTPcv/9wmFVbIMDp2g23EbH96erxNJayAzaxF7Ehg+GTfff3n50mFFS+Six5iDp/sb+fZm6TCCjeP6+CXXQyf7G/v/jypsJ6E0QH8+zL6jR7DJ/vixcpNJaxgXvky+q1pY4X1pASnElYo/x6sfk6wFdYpWSGHKpCraeCLFYdP9v/O6pWskEMVKIxu4IbH4ZP9+axeyYo5VmEy3xaeFz5itv/wiD9mFVaYQhE5fD5CWH+sjXdphRXE2kRvYY0VVsWSFXW0QlwJHDt8PkZYv+45eOcSVoj20SZ0+HyMsHbv93y0XMIK0PCO38IaL6xqJSvueF3P7t9vGnDuY4VVrWTFHa/Zv2ZnEb+FdYSwPlUqWYEHbDX3xG7Dt7COENZdpZIVecQuZ+44rGOHz8cJq1bJijxif370j/Nsxg049/HCqlSyQg/Z+rnjnKfdEPzZ87sjS9Yir7D+cDlzWZxFfOd+hLAeStZlXmHNPbPb8M79CGHVKVnBB20z71Z0vmvgG8lGz/ndWYWSFXzQfm9mfZz15W/PehPWw4Au8grrazNrzpLxYwPf+ro7vmRt8wrrt3L966wdjw8dCuuhCq8SC2vmqf3LWY/Cui9fsuKP29/PMLWwKpQs85JSWOVLlnlJKazyJcu85BRW8ZJlXnIK66FknRMWphTWQ8m6ISxMKKyHAPacsDClsD6XLVnmJauwHkrWmrAwpbDKPiLEvKQV1kNWtiYsTCmsLyVLlnnJK6yiJcu8JBZWyZJlXhIL6yNhoYCwHprvP9oKMaGwbr//gaVTISYU1kPB2hAWJhRW0YJFWGmFVbZgEVZaYZUtWISVVVifyxYswsoqrIuyBYuwkgqrdMEirKTCKl2wCCunsIoXLMLKKaziBYuwUgrr4Vlyl4SFCYX14fuvFnxAlnlJKKwKBYuwMgqrQsEirITCqlGwCCuhsGoULMLKJ6wqBYuw8gnr/fffW+0IC9MJ66cqBYuw0gmrTsEirGzCevgmsy1hYTph3VUqWISVTFi1ChZh5RJWtYJFWLmEVa1gEVYqYdUrWISVSlgHC9Z/fhjG3wiLsF4pWM+flPzz4Be7IizCOlywbg5cAT+ALWER1qHLGp4XrI8jXu2csAjr+U54oGCN+kbIBWER1oHHgKwPxYdDeEdYhLX/ZsKXD4Ys8XLmJV3FWu9ULExq3t/vL1g8Fk4T1sX+guVUiNOE9WV/wRrVx7okLMJ6we2Bp4DovOMkYe3+fbP/50Ozwv/KCglrXswLYREWCAuEBcIiLBAWCAuERVggLBAWCIuwQFggLBDW/9k7l8W0dSCAYoOzJm3jNW0T1iSlrNub1mv6Yl2K4f8/4SaAjS3LTyxLss9ZtWlKQDoejWZkB7EAsQCxALEQCxALEAsQC7EAsQCxALEQC7EQCxALEAuxEAuxALEAsRALsRALEAsQC7EQC7EAsQCxEAuxEAsQCxALsRALsQCxALEQC7EQCxALEAuxEAuxALEAsRALsRALEAsQC7EQC7EAsQCxEAuxEAsQCxALsRALsQCxALEQC7EQCxALEAuxEAuxALEAsRALsRALEAsQC7EQC7EAsQCxEAuxEAuqEJjoVci8WM/GRLH2zIv1zE0U6x/zYj2OiWItmBf78c3z6plZ6QO3pvGWOQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK65ObzyL/U173Ah/H47q/NKGb6off/j009ZtPpqr8xw4ypWx1Hcpb7mCG78Qiyoy+Y4ivvciHXkK2JBTc7DWBixDodnxIJGI7kojFiHwxqxoA6eTJxsxDqEM8SCGkzOw/i3JGJVCFmIBeKmUNgWSiKWkN4jFhTjn4dxWxaxyqcOseBCEOVQmYh1DlEf74KKgtxE0zGPSq5j68Q64iJWS2MozoyXWvvGgaSGilhQxCWbmuZErPibQsSC2pvC9Px7QrbuVxppPWK5t0dGiGUU81isf/kR65zML4wUS1l+gFhXbwr/iNtCMWK5mcUSsaCQYwv6rZhCiRHrtHdcIxZU5TiEH8SBFCPWKbB9QSyos6UKTwFpWhCxVm2J9fg7OITf3xa+zuv3fPuRzOjGvw/fX//u3gXhj3oT/vHdy4tlf577+Ofb4eWnPCGWErxTduULK50nFevv1WKNN1F/aCH8t0vXKPqe8E0UUBfuq/j72flt7IS3JTkBe1rhXz/Q+3NfQbDkMaoLn4RFrLa5Oc3UXPDGUSPWOLg0TN7kiHX5nm0s1v25HuKIFbdcsaIrxZGeJ4v9Pgq8QKz2OS9xEyESqMmxkl4l5jMllrtJuXISKzj/60psa5ZFLDeQ1X+doORAEGK1sylcZ0RylIjlp09LzGRirdLndI5/eIy6woFoQlnEur+82jb94ZLsEKt1glPhcyycTvZUlBvuhfn8TyLWWDhNcfzD8vyF20z0KYtYgeRwxjjInL+YIpaKTeEhXnJyI9a4UoF0/OmFUVIs9/Ur55d1MxM6y4qVkC+MqyHR6hhkuk8lEcuTnd5xswd7dojVMrFAm3RE8hq1dGLmkqnOBKw4ZCXFCoS1S37Ca1cxYq2S/2krX5FlDiHWtUyiERdyKKdRE7pYrOwKFGbESqY///LF2laMWIHkp8kMFxd5xLqW2IB5ekUQItZDxbPJRWJFzvx4Gn28S81nQqy5ONnnWkG0V/x1+sO+WsT69fqtLz/uXTrJOr2T/e3TzI3+6R9itUscqCaSjVM8fe8rHvQrFGuVLF85mVc8qeyf1XM//T55EMWaSfSHm+zJsHlexPoTbT39dIr48sPDqBa/zJ7LRqyWNoXTyKRQmOYPRz7dVb+zsGCqTyr9TMXAUBQruNS3Po9isXZRlNmdv69crM056V8kYlSi7JEo/PuSM4yIdSVuvESM00Mpu0unxkBLpnosrKZCELncvpHeIUR3po0jNZwaEesSEoNU42CSbPB4ks+GWG1sCsN07EpPc1EZsZZYE0GksXBq1ROKW0mxvkTfvh5lKm5FEeti6Sr1LeNZxvgFYrVJIkffpOZZFrGmV4m1ktbyd6JY4rn6yKf4pGFFsfx0gJwXXBkBYqnZFO4k17RXsMVvJtZG/NJEktVlAtYo8qmuWJv0Zm9S8Ak22asGsa4kcWbhJjX02YgVLq4TK5P+O+nJ8+T32qTFWtSMWFPE0kOi3p6uXGUj1s/RVWJlMxnhGL0nL5VF/62uWBuJtojVGYm5TQcQ5yqvJFPtZH1I97U9WaFSFGtWL2LtRwViuY+/vwU5CSRiXUeyxuCmQooQsfZPoyvF8uS9mUsJwJOXypqKtUmblBHLvSvamSBWC5vCUBZAUhErfKr7wtXFErYL01Yj1i5XrMzRGcRqk1RK6ycDSJRx+c3uXs9O9eRQ0k725HN5VcT6myeWExwQS/WmcCf7S9Qr9Jo9hyg71TfVxBq1GrG+5IhVetQPsa7Dz324WhSx3NolrJpi7aXLcksRK0+szQGxlJJ7QupyuqHZWthUrH27EWstF2tyQCyluPlP7YunedJoLayeY4WKxNoUiBUglloKGoJxxBrXPOJnilgFESvaoH59+2FGgVTZplD+vNDLNDdaC42OWCvhVmzEapt5fl3pcoJ0Iu0NN6tjbctqap1ELLH1iVjqN4Xp5eL0JIUma2FOS2ffnVj5EcsRS/wBYrXMJn9pcoSDWnUOY0mnunSqOotYYl3DJXnvYFMYjWZimu/l3eGaYsnigp6IdSOc+XMQq2WEY+6pu50TEWtc7YnJZVPtl6RqnUUs8cE6kwGL9UbJq2Zq3YH8dFaDtbDK0eTR6ElLxBLF2mgV673e0LJQ8bI34lQmTg8nc+153VsppFOdPb0wDrVErPQZ7OwjtzoVS9HUVp6mrYqXFZ+Ol/xCcpqd+mth7u1fiQ/iblKnr7qNWFtxa6xJLL9m8touQZ17RWtuCv/KQ1iqOhDUXgvzDwv/TM7oTkfEukk9YWuptaXj1U1eW8+FwpkSXw/ZoHHITnP9tVA21fPUEyLdd2XPaVYVsSbJJ0d+1torPD7Yaa1NLL92ilNjU7iQfyUVsZyqv2E1Xk9ld7lGj1T7+vosjs9BooEknnyoIdYq7xY1v6RA+vI2Rh8ef2eb0OP6v7H4umRkq8srBb+DKDHAs8x1us7Gj6DGEOeKJSv0b2Vihc3F2leIWPLynQ6xHEUzW2dZqX/AoJRJNiW/ZF2O5GFBuyvF8vLKsd1GrEzDIdAl1ubQoPbc7jrcoA/cJA5fFl3pXYaz68SStJCeNUQs8aDFbqNJrPvDoUHtud0y5kFB/u5nr5bLTjwdsdwaa2GBWJnzX+eP1HHEEtSZahLr8khWPem73+RpL5U3hV9yVkdhj7aqfvS9QKx4by8kNh1HrPR/2o00ibVq9FSMtlP3BicMyi4YyUs6cTLpSG4krrYWFokl5O/Po5GOiJUa05egqUcsp85vcVchViC7Hlv7YAuJxdNsxHKr/zr6QrFcX+JV5xHr/DjB6LyfHrE2DZ+30nqK13b+PpHdxxcvj+K5vOprYaFYIzeuSIay36XTTcS61EWP55O1iKVqWpuprbVj2VYIvnv9bW5/3s60v4uyX27XVYaz1/QenIYPPwOD8VWlzs22DzobS6CihqSkWVe/4KGmGQ1DnVFPtpUCe1masgb5/crfh87YmKx5TP7e18xdc5y4b/w0UDCOB/0lrEu2tyF/72Pmvtc+l44R+1NogZUJJSxj3w70JUQoa0ZDt2hvPhfl7/8xP7Zi4DRuKGbZjwnNZ/L3HmJkqZtmtPWY2ZyjGW07ps4gzWjLWZq65tCM7k3mvuWdwQDiAs1oi3kwuBJJM7ofmbt5vROKWdZieLeXZrSlmB4SaEZbivFJDM1oK7Fg2mhGW4gNhSKKWRZiRWmb/N067GjG0Yy2DVtmjGa0ZSxtOfBEM5rMnfwdLIoDNKMt4sGmyiPNaCsXQvN7JTSjrcGy6hDFLEvwLAsBLs1oK7Cv6Egz2gqW9m2zaEZblrlvLXzP5O+GYmUpe8md0abzYGXzjWY0M6R+J0sz2kCsfdoGzWijsfeX1dCMtmXfHlp23dOMtmRybKs0cme0HcuJfb0RmtFWJMBTuzceU2bTzC27jZc8zWjz58XOJIVmtJEs7d9WUcwyPHPf8hmAzD0n6pK/G8FDLzbrNKOZEfU7W/J3A1j1pSFC/m4UTm+yXvJ3o+jRoXGa0YZOxnOPLhLyd3OWD/vngma0kZn7ul8fZ8rsmrFF70O+SzPavHmw7dhoecpIMUsby/5NA8UswzL3fQ8/E/m7AVd3b1Jd7ozWzkMvL26a0cyA+p0u+bsGVn1tgJC/a8XpbcuWZrRWevzEMprRhgz+c48vGvJ3fctF/8aeZrQRCe663xuTKbOtZ0vex/yWZrT+ce/njvyBYpYOlv0fdh7TrTlz3w/gM1LM0pC59za15c5orflHfzfjNKMZcfU7X/L3DlgNpeFBM7pTnMFkteTv7MPVQDNa02A/D+giIn/vbnno/1jTjNaSua+H9XGnzH43W/Ah5LM0o7sf537c+VwGzehOWA5vmP2hXUq6M/f9AD8zxSz1V+9wUtklxawu843hbL5pRjPC6nfCFLMUsBrqmuBTzFKJM9gsdoh7lg4Z8CFwHvPX0eA+D/iiopilbjkY3t6IZnQnCex62BuXNTao2XIPsf5MMUv9uA7z+DfNaCUsGVburFCcue8ZA5rRKq7WKVGb/F1BfjHczTb5OyOqfmdMMasFVhxIIiNQgEPWyh5GBTyBLIZmtKLBfB74WAzvJqVuwj97IY+0QEXmvmY4uDOaS5QATlJB/j40aD6zSVYd+CncnKCs1wKUmtnOqIDmc2neSf7OCHK9mRjzeRoGGQJZKnsa9tV2QhXmCmg+V8w+uegah3sydxEOk7aSoK4ZjqKNDfl7w0uSzJ2AriKJIHMvS0HJ39n2sGk2JtD/397d68SRBQEUtmU5n4iYAHICxAMQbExEbln7/q+wYne1Ozbz0z196/atut+JLQE9/XOqjhssak5jzbfR3KnpAn833ixCDFvrofzdEXP9DXGPF58ZAys145ija2CZdePBEp9X2KiLcPHtnblfQ4y+ydzfHI41h4u/L7wEmfuCG/zx34x2gycN/L0v4rMhOtrcLWaWYe23AKtk404E4tdmL+XvjpDrcY97uvjMIFiomcfcXBPLrIUHR3zeYKcuyrO3c+a+RSP4+1kBfXM4tgw+/P0I8XnjDV+MvioJzJ2/N0N8NlRHm7tFzHZ/JxMnzJ16NvB348/fiF2tPdXCxhGJmaxdn1/EZ0bBOs1A5uQZscw6czDE54a2OvlFKj7z93Bzf3NmtDycB5cYc2/2ABCjSQF/j0N8NmRHm7vFSxusBb9YFRuHYhCfw7313hFwRrheA+7Z4nOQYUzo7yzTTGQuzsXUyyzxuZO9TnbRis+9NGMyf/fmc7fB6DDTDy4+Bz8QJo3R3nzm7yGIz4buaHMXn+P9fRrZEJ87+/sk45H43Ntj51joiM/9J+8pVtDiM+NglVVmpAmOtPjcjamWWeIzm42+PTP3nv5efP72X/13O9yHWS4h5t7hAfHHHI3Dm8/8PQTx2RAebe7icx+mWBuKz8alCMTn3b323k+IiOu55EpafB7AQAr6u/hsZjL31uKh8rNCfGa30bdj5r6nhhSbx735PMzgdKj0g4nPOz8wisZobz6PpLiFKq34bCiPNnfxeX9/LyMj4vNg/l5kfBKfR/PcGgsf8Xm8ybzEilp8HtBICvi7+DziDFXgkxCfh6HUMkt8ZrvRt1/mPpKWJJ/Pvfk87MdxqDLiMvcBHiBFYrQ3n/l7COKzIT3a3MXn8fw9rZyIz8apCMTn4b333k+AiOs95cpafE5gKAn9XXzOMFMl/GTE52FJ/Wa0+Mx+o2+3zH1kTUk2r3vzOc1gdcj0jYvPgz9QksZobz5nUuBEFVd8NrRHm7v4PL6/p7UrsI0AAAQuSURBVJEV8TmZvycZr8TnbB6cYyEkPueb3FOssMXnhMaSwN/F54wz1g/XAZqRKkY/is95/P09jw0z90wkitHefE5FmhjN3JP5e5YY/e7N57z+/urbRMStYNwhXnzO7e/Dyov4nNzfBx23vovPCRl/QWSFlZPhY/Sz+JyTwSPcNyuspAz+yYnPaRk6RovPif194BjN3DMzcIwWn1MzbIwWn5P7+6gx2u8sKuTvr2N+W1ZYKRny1mCFVcvfh/kMrbD4ewTfrbAKMN7CyAqrBsPdH56tsGowmNEw9yoM9kky9zIMtTV69P5EHX8fKEYfm/ufzD05A8XoF+9PVGKYj/Or9ydq+fsoMdqbz4X9/XX6bwMht4r9hnxvPtf2992WWd58Lu7vb/t8C+JzRfZPv+JzTXa/X4jPRdk50onPVdl5JhOfy7LrFkl8nsTfn/b72uJzNXYsdeJzaXb7eMXn4v6+1yrp3QqLv1cbG9D51tFv6Bef5/L3bmtKK6zJ/P2tz5cUn2egfwoWn+eg+6/tF58nofN/txOfZ6HzjMbcp6HrVkl8ntTfn/p9LSss/t4M8Xkqui2zxOfJ/L3Xakl85u/pxwSMQJcYLT7PRxf5scLi79HDp/g8C/FpWHyek/C/RCk+T0qwAYnPsxL8yTP3aQn9Nd3iM3+PsGvxeWYCY7T4PDVhH7/4PLm/Rz2wxGf+HqHY4vP0hMRoKyyEvBlthYUIfxefEbHMEp/xQfMYLT4jwoiYO0LOBOaOf2kao8Vn/EfDPbn4jP9pWPbEZ0ScDuIzQh5g4jMilFt8RsSSwAoLl86Jn7uenahFgxAjPuOyv9/m3eIzrt1vbhJv8RkRhsTcEXJmMHecYVOMFp9xlg17c/EZ59lQ+sRnRJwe4jNCHmjiMyIUPPQXIqECd7f8mR0rLIScI1ZYuMrzen8Xn7HO35d5uPiMtfefRf4uPiPCmJg7QvyduWMhD2uebeIzFrNijy4+Yzkryp/4jBUsPl3EZ6xh8QNOfMYqFiq5+IyVLIrRVlhYy6I3o62wsJoFoUZ8xkZ/v7/2L5g7lnI1RovP2OrvpwyKuWO7v/+4cW4EPnMxRovPuJkLe3XxGbdzoQSKz9jA2dNHfMYWzj7wxGds4oyii8/YyMmlghUWtnLyHBKfsZkTb0aLz2jr7/94uviMFnyK0eIzWvv7h1Exd4T4O3NHI36J0eIzmnG8Zxef0YzjMig+ox0vp84r8RlbOV5dWWGhHY+fTyzxGQ24+/28ssJCC779fmI9OSZowfOv55X4jAh/Z+5oxXGMFp8R4u/MHRH+7s1ntORBfEYI7+IzIvgqPiOEF/EZEXwss6yw0J5H8Rkh3FlhIcTfnxwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCU/AVC+YYzpa069gAAAABJRU5ErkJggg==" alt="Logo" width="140"  />
          </a>
        </nav>
      </div>
      <div class="row">

        <div class="col-md-6 offset-md-3">
          <div class="container">
          <br/><br/>
      
          </div>
        </div>
      </div>

      <div class="row">
      
        <div class="col-md-6 offset-md-3">

          <div class="container">

            <Terminal
              color='green'
              backgroundColor='black'
              barColor='black'
              style={{ fontWeight: "bold", fontSize: "1em" }}
              commands={{
              
                height: (args, print, runCommand) => { 

                  axios.get('http://arweave.net/info').then(response => response.data)
                  .then((data) => {
                    console.log(data)
                    print('Arweave network height is: ' + data.height)

                  })

                },
                status: (args, print) => {

                  const txn = args.slice(1).join(' ');

                  axios.get('http://arweave.net/tx/'+ txn).then(response => response.data)
                  .then((data) => {
                    console.log(data)
                    if(data.id == undefined) {
                      print(data)
                    }
                    if(Object.keys(data).length) {
                      print('confirmed')
                    }

                  })

                  

                }, 
                tags: (args, print) => {

                  const txn = args.slice(1).join(' ');

                  const transaction = arweave.transactions.get(txn).then(transaction => {

                    transaction.get('tags').forEach(tag => {
                      let key = tag.get('name', {decode: true, string: true});
                      let value = tag.get('value', {decode: true, string: true});
                      print(`${key} : ${value}`);
                    });
                  });

                },
                balance: (args, print) => {
                  const txn = args.slice(1).join(' ');
                  arweave.wallets.getBalance(txn).then((balance) => {
                    let winston = balance;
                    let ar = arweave.ar.winstonToAr(balance);
                    print('AR Balance: ' + ar)
                  });
                },

                wallet: (args, print) => {
                  const txn = args.slice(1).join(' ');

                  arweave.wallets.generate().then((key) => {
                    console.log(key);
                    arweave.wallets.jwkToAddress(key).then((address) => {
                        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(key));
                        var downloadAnchorNode = document.createElement('a');
                        downloadAnchorNode.setAttribute("href",     dataStr);
                        downloadAnchorNode.setAttribute("download", address + ".json");
                        document.body.appendChild(downloadAnchorNode); // required for firefox
                        downloadAnchorNode.click();
                        downloadAnchorNode.remove();
                  
                        print(address);
                    });
                  });
                
                
                }  


              }}
              descriptions={{
                balance: 'Check AR balance',
                height: 'Check current AR height',
                status: 'Check transaction status',
                tags: 'Retrieve tags associated with a transaction',
                wallet: 'Create a new wallet'
              }}
              msg='Hello, welcome to AR Terminal - Use `help` to see all the available commands '
            />

            
          </div>

        </div>
      </div>

      
    </Fragment>
    );
  }
}

