FROM python:3.5

ENV PYTHONUNBUFFERED 1

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install sudo

COPY ./requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt
RUN rm -r /tmp/

WORKDIR '/my_todo_sample'