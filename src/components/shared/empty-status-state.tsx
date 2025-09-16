'use client';

import { AlertCircle, Database, RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TStatusState } from '@/types/empty-status-state';
import { useState } from 'react';

export function EmptyStatusState({
  type = 'empty',
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}: TStatusState) {
  const [loading, setLoading] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle className="text-destructive h-12 w-12" />;
      case 'loading':
        return (
          <RefreshCw className="text-muted-foreground h-12 w-12 animate-spin" />
        );
      case 'search':
        return <Search className="text-muted-foreground h-12 w-12" />;
      default:
        return <Database className="text-muted-foreground h-12 w-12" />;
    }
  };

  const getDefaultContent = () => {
    switch (type) {
      case 'error':
        return {
          title: title || 'Something went wrong',
          description:
            description ||
            'We encountered an error while fetching your data. Please try again.',
          actionLabel: actionLabel || 'Try again',
        };
      case 'loading':
        return {
          title: title || 'Loading...',
          description: description || 'Please wait while we fetch your data.',
          actionLabel: actionLabel || '',
        };
      case 'search':
        return {
          title: title || 'No results found',
          description:
            description || 'Try adjusting your search criteria or filters.',
          //   actionLabel: actionLabel || 'Clear filters',
        };
      case 'empty':
        return {
          title: title || 'No data available',
          description:
            description ||
            "There's nothing to show here yet. Check back later or add some content.",
          actionLabel: actionLabel || 'Refresh',
        };
    }
  };

  const handleAction = async () => {
    if (onAction) {
      // Use parent passed function if available
      onAction();
      return;
    }

    switch (type) {
      case 'error':
      case 'empty':
        setLoading(true);
        try {
          await window.location.reload();
        } finally {
          setLoading(false);
        }
        break;
      case 'search':
        console.log('Search filters cleared!');
        break;
      default:
        console.log('Action clicked!');
        break;
    }
  };

  const content = getDefaultContent();

  return (
    <Card
      className={`mx-auto flex max-w-xs flex-col items-center text-center md:max-w-xl lg:max-w-3xl ${className}`}
    >
      <CardContent className="flex flex-col items-center gap-4">
        <div>{getIcon()}</div>
        <h3 className="font-inter text-foreground text-2xl font-semibold text-balance md:text-3xl">
          {content?.title}
        </h3>
        <p className="text-muted-foreground max-w-[350px] text-sm text-pretty md:mb-6">
          {content?.description}
        </p>
        {content.actionLabel && (
          <Button
            onClick={handleAction}
            variant={type === 'error' ? 'destructive' : 'default'}
            className="hover:bg-[] min-w-[120px] cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Please wait...' : content.actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
