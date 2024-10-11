import random 
from django.core.mail import EmailMessage
from .models import User, OneTimePasscode
from django.conf import settings

def generateOtp():
    otp = ""
    for i in range(6):
        otp += str(random.randint(1, 9))
        
    return otp

def send_code_to_user(email):
    otp_code = generateOtp()
    subject = 'One Time Passcode for Email Verification'
    print(otp_code)
    user = User.objects.get(email=email)
    current_site = "myauth.com"
    email_body = f"Hi {user.first_name},\n\n Thanks for signing up on {current_site}. Please verify your email with this one time passcode: {otp_code}"
    from_email = settings.DEFAULT_FROM_EMAIL
    
    OneTimePasscode.objects.create(user=user, passcode=otp_code)
    
    d_email = EmailMessage(
        subject = subject,
        body = email_body,
        from_email = from_email,
        to = [email]
    )
    
    d_email.send(
        fail_silently=True
    )
    
    