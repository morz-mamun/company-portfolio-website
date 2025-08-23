import { toast } from 'sonner';

export const handleShareBlog = async (title: string) => {
  const shareData = {
    title,
    text: `Check out this article: ${title}`,
    url: typeof window !== 'undefined' ? window.location.href : '',
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      toast.success('Link copied to clipboard!');
    }
  } catch (err) {
    toast.error('Failed to share.');
  }
};
