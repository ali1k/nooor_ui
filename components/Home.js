'use strict';
var React = require('react');

class Home extends React.Component {
    render() {
        return (
            <div className="ui page grid" ref="home">
              <div className="ui row">
                <div className="column">
                    <div className="ui segment right aligned">
                        <h1 style={{fontFamily: 'nazanin'}}> دانشنامه موضوعی قرآن </h1>
                        <p style={{fontFamily: 'nazanin', direction:'rtl'}}>
هدف از این پروژه، پیاده سازی وب معنایی بر روی داده های فارسی و عربی می باشد.
در اولین گام پروژه سعی در یکپارچه سازی نوع موجودیت های زیر داشتیم:
<img src="/assets/img/datamodel.png" className="ui image centered"/>
بعد از جمع آوری داده ها از منابع، داده ها بصورت <a href="http://www.w3.org/RDF/">RDF</a> تبدیل و ذخیره سازی شدند.
داده های مرتبط از طریق لینک زیر قابل دسترس می باشد:
<br/>
<a href="http://tanzil.ld-r.org" className="ui link">http://tanzil.ld-r.org</a>
<br/>
علاوه بر این، داده های مرتبط فشرده شده توسط <a href="http://www.rdfhdt.org">HDT</a> از طریق لینک زیر قابل مشاهده می باشد:
<br/>
<a href="http://nooor.herokuapp.com/nooor" className="ui link">http://nooor.herokuapp.com/nooor</a>
<br/>
منابع داده ها:
<br/>
<a href="http://tanzil.info/">تنزیل</a>
<br/>
<a href="http://tebyan.net/">تبیان</a>
<br/>
<br/>
<a href="http://ali1k.com/" className="ui blue label"> تماس با من </a>
                        </p>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = Home;
