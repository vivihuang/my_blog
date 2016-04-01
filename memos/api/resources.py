from tastypie.resources import ModelResource
from memos.models import Memo


class MemoResource(ModelResource):
    class Meta:
        resource_name = 'memo'
        queryset = Memo.objects.all()
        allowed_methods = ['get']
