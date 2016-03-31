from django.test import TestCase
from django.utils import timezone
from .models import Memo


class MemoTestCase(TestCase):
    def setUp(self):
        self.content = 'First Item'
        self.time = timezone.now()
        Memo.objects.create(content=self.content, active_status=True, create_date=self.time)

    def test_memos_can_save(self):
        print(self.time)
        item = Memo.objects.get(content=self.content)
        self.assertEqual(item.id, 1)
        self.assertEqual(item.active_status, True)
        self.assertEqual(item.create_date, self.time)
