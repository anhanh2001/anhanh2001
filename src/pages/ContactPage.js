const ContactPage={
    render(){
        return `
        <main class="mainContainer_theme"><div  class="layout-pageContact">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12 box-heading-contact">
                    
                    <div class="box-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4694.167885907537!2d106.68843690662703!3d10.818128041758944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529542c3880bb%3A0x68ffc88f441cc986!2zR2nDoHkgY8aw4bubaSBLSVlPS08!5e0!3m2!1svi!2s!4v1588598080559!5m2!1svi!2s" width="759px" height="458px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    
    
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12  wrapbox-content-page-contact">
                    <div class="header-page-contact clearfix">
                        <h1>Liên Hệ</h1>
                    </div>
                    <div class="box-info-contact">
                        <ul class="list-info">
                            <li>
                                <p>Địa chỉ chúng tôi</p>
                                <p><strong>91/27 Nguyên Hồng, Phường 1, Quận Gò Vấp, TP Hồ Chí Minh</strong></p>
                            </li>
                            <li>
                                <p>Email chúng tôi</p>
                                <p><strong>giaycuoikiyoko@gmail.com</strong></p>
                            </li>
                            <li>
                                <p>Điện thoại</p>
                                <p><strong>0899459988</strong></p>
                            </li>
                            <li>
                                <p>Thời gian làm việc</p>
                                <p><strong>Từ 9h đến 21h</strong></p>
                            </li>
                        </ul>
                    </div>
                    <div class="box-send-contact">
                        <h2>Gửi thắc mắc cho chúng tôi</h2>
                        <div id="col-left contactFormWrapper">
                            <form accept-charset='UTF-8' action='/contact' class='contact-form' method='post'>
    <input name='form_type' type='hidden' value='contact'>
    <input name='utf8' type='hidden' value='✓'>
    
                            
                            <div class="contact-form">
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                        <div class="input-group">
                                            <input required type="text" name="contact[name]" class="form-control" placeholder="Tên của bạn" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="input-group">
                                            <input required type="text" name="contact[email]" class="form-control" placeholder="Email của bạn" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="input-group">
                                            <input pattern="[0-9]{10,12}" required type="text" name="contact[phone]" class="form-control" placeholder="Số điện thoại của bạn" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-xs-12">
                                        <div class="input-group">
                                            <textarea name="contact[body]" placeholder="Nội dung"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <button class="button dark">Gửi cho chúng tôi</button>
                                    </div>
                                </div>
                            </div>
                            
    <input id='7691c8ee64a94342b1dff262eb3e8809' name='g-recaptcha-response' type='hidden'><script src='https://www.google.com/recaptcha/api.js?render=6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-'></script><script>grecaptcha.ready(function() {grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {action: 'submit'}).then(function(token) {document.getElementById('7691c8ee64a94342b1dff262eb3e8809').value = token;});});</script></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
        `
    }
}
export default ContactPage;